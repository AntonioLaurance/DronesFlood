const mqtt = require('mqtt')

const pub = mqtt.connect('mqtt://20.219.162.228:9000')

const topicName = 'test'

let payload


function connect(){
    pub.on("connect", function (connack) {
        console.log("pub connected", connack);

        setInterval(() => {
            let la = 19.27 + (Math.random() * 0.03);
            let lo = -99.122 + (Math.random() * .02)
            let co = Math.ceil(Math.random() * 3)

            payload = {
                "color": co,
                "lat": la,
                "lon": lo
            }
            pub.publish(topicName, JSON.stringify(payload))

            console.log("Message published: " + payload.color + ", " + payload.lat + ", " + payload.lon)
        }, 3000);
    })
}
    

pub.on("error", function (err) {
    console.log("Error: " + err)
    if (err.code == "ENOTFOUND") {
        console.log("Network error, make sure you have an active internet connection")
    }
})

pub.on("close", function () {
    console.log("Connection closed by pub")
})

pub.on("reconnect", function () {
    console.log("pub trying a reconnection")
})

pub.on("offline", function () {
    console.log("pub is currently offline")
})