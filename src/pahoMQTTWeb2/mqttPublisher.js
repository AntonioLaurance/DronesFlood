//the host to which we want to connect
const host = "20.219.162.228";

//port number the host is listening to
const port = 1883;

//our topic to publish and receive message
const topic = "srv/info";

//variable to hold connection data
let client;


let payload;

let lastMsg;


function onConnectionLost(responseObject){
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost: " + responseObject.errorMessage);
    }
    return -1;
}

function onMessageArrived(message){
	let msg = JSON.parse(message);
    console.log("onMessageArrived: " + msg.color);
    lastMsg = message.payloadString;
}

// Function foc connecting
function connect(){
	try{
		// create a client instance, 
		// "" is client id, if empty string is passed a random client id will be generated
		client = new Paho.MQTT.Client(host, Number(port), "client_id");

		// will be called when new message arrives
		client.onMessageArrived = onMessageArrived;

		//when connection is lost
		client.onConnectionLost = onConnectionLost;

		// lets connect the client
		client.connect({
			onSuccess : () => {
			    console.log("connected");
			    
				// subscribe to the topic, we will publish message to this topic
				client.subscribe(topic);
				//client.onConnectionLost = onConnectionLost;
          		//client.onMessageArrived = onMessageArrived;

			},
			onFailure : () => {
				console.log("failed to connect");
			}
		});
		
	}
	catch(err){
		console.log("Not connected!");
		console.log(err);
	}
	
}

function onMessage(mgs){
	//parse the received message
	let msg = JSON.parse(mgs);

	let html = document.getElementById('window').innerHTML + `<div>${mgs.color}</div>`;
	//append html to DOM
	document.getElementById('window').innerHTML = html;
}


function publish(){
	let m = document.getElementById('message').value;
	//console.log("pub connected", connack);

	payload = {
        "color": Number(m),
        "lat": Number(m),
        "lon": Number(m)
    }

    let mgs = new Paho.MQTT.Message(JSON.stringify(payload));
	mgs.destinationName = topic;
    client.send(mgs);

    document.getElementById('message').value = '';



	/*
	//get message form input box
	let m = document.getElementById('message').value;

	// the payload is defined
	payload = {
        "color": m,
        "lat": m,
        "lon": m
    }
	
	//prepare the payload
	let data = JSON.stringify({payload});
	let mgs = new Paho.MQTT.Message(data);
	mgs.destinationName = topic;
    
	//publish from here
	client.send(mgs);
	
	document.getElementById('message').value = '';
	*/
}