// NUEVO --

//the host to which we want to connect
const host = "4.230.139.120";

//port number the host is listening to
const port = 1883;

//our topic to publish and receive message
const topic = "srv/info";

//variable to hold connection data
let client;

// Function foc connecting
function connect(){
	try{
        
		// create a client instance, 
		// "" is client id, if empty string is passed a random client id will be generated
		client = new Paho.MQTT.Client(host, Number(port), "client_id");

		// will be called when new message arrives
		client.onMessageArrived = onMessage;

		//when connection is lost
		client.onConnectionLost = function(){console.log('Connection lost')};

		// lets connect the client
		client.connect({
			onSuccess : () => {
			    console.log("connected");
			    
				// subscribe to the topic, we will publish message to this topic
				client.subscribe(topic);
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
	mgs = JSON.parse(mgs.payloadString);
	let html = document.getElementById('window').innerHTML + `<div>${mgs.m}</div>`;
	//append html to DOM
	document.getElementById('window').innerHTML = html;
}


function publish(){
	//get message form input box
	let m = document.getElementById('message').value;
    
	//prepare the payload
	let data = JSON.stringify({m});
	let mgs = new Paho.MQTT.Message(data);
	mgs.destinationName = topic;
    
	//publish from here
	client.send(mgs);
	
	document.getElementById('message').value = '';
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        document.getElementById("position").innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition(position) {
    // Obtaining and modifying position
    document.getElementById("position").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var XMLHttpRequest = require('xhr2');
    var request = new XMLHttpRequest();


    // Open a new connection, using the GET request on the URL endpoint
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=7f95472e36ea55ab5f5e474665219d28';
    request.open('GET', apiUrl, true);

    request.onload = function () {
        var weatherObj = JSON.parse(request.response);
        document.getElementById("weather").innerHTML = (weatherObj.main.temp - 273.15) +  "ºC";
        console.log(weatherObj.main.temp - 273.15);
    }

    // Send request
    request.send();
}





