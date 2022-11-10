import random

from paho.mqtt import client as mqtt_client

broker = '20.219.162.228'
port = 1884
topic = "srv/temperature"
client_id = f'python-mqtt-{random.randint(0, 100)}'
username = 's2'
password = 's2987654321'

# Connection with the BROKER
def connect_mqtt() -> mqtt_client:
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id)
    client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client

def subscribe(client: mqtt_client):
    # Callback function
    # The function catches messages muplished in the channel
    def on_message(client, userdata, msg):
        print(f"Received `{msg.payload.decode()}` from `{msg.topic}` topic")
    client.subscribe(topic)
    client.on_message = on_message

def run():
    client = connect_mqtt()
    subscribe(client)

    # Using the PAHO loop is run indefinitely
    # The loop automatically handles recconects
    client.loop_forever()

run()