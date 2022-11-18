import random
import time

from paho.mqtt import client as mqtt_client

broker = '20.219.162.228'
port = 1885
topic = "srv/temperature"
client_id = f'python-mqtt-{random.randint(0, 1000)}'

# Connection with the BROKER
def connect_mqtt():
    # Callback function
    # The rc parameter allows us to know if the connection was stablished
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id)
    # client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client

# Publiser method
def publish(client):
    msg_count = 0
    while True:
        time.sleep(1)
        temperature = 20 + (random.randint(0, 100) * 4)
        msg = f"temperature: {temperature}"
        result = client.publish(topic, msg)
        # result: [0, 1]

        # Continues until status is equal to 0
        status = result[0]
        if status == 0:
            print(f"Send `{msg}` to topic `{topic}`")
        else:
            print(f"Failed to send message to topic {topic}")
        msg_count += 1

def run():
    client = connect_mqtt()

    # A PAHO loop is started
    # The loop automatically handles recconects
    client.loop_start()
    publish(client)

run()
