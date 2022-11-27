import random, json
import mysql.connector
from mysql.connector import Error

from paho.mqtt import client as mqtt_client

broker = '20.219.162.228'
port = 1884
topic = "srv/info"
client_id = 'nodeID'
username = 's2'
password = 's2987654321'

# sql functions

def connect_mysql(host, user, password):
    dbconn = mysql.connector.connect(host=host, user=user, password=password)
    print('Connnected...')
    return dbconn

def disconnect_db(connection):
    if connection.is_connected():
        connection.close()
        print("MySQL connection is closed")

def create_db(dbname, conn):
    mycursor = conn.cursor()
    mycursor.execute("CREATE DATABASE " + dbname)

def use_table(tbname, conn):
    mycursor = conn.cursor()
    mycursor.execute("USE " + tbname)

def insert_values(tbname, conn, lat, lon, color):
    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO " + tbname +  " (lat, lon, color) VALUES (" + str(lat) + ", " + str(lon) + ", " + str(color) + ")")
        conn.commit()
        print(cursor.rowcount, "Record inserted successfully into events table")
        cursor.close()
    except mysql.connector.Error as error:
        print("Failed to insert record into events table {}".format(error))

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

def subscribe(client: mqtt_client, dbconn):
    # Callback function
    # The function catches messages muplished in the channel
    def on_message(client, userdata, msg):
        received_msg = msg.payload.decode()
        obj_msg = json.loads(received_msg)
        insert_values("events", dbconn, obj_msg["lat"], obj_msg["lon"], obj_msg["color"])

        print(received_msg)
    client.subscribe(topic)
    client.on_message = on_message

def run():
    dbconn = connect_mysql(host='localhost', user='adminDB', password='Iot123456789')
    use_table('events', dbconn)

    client = connect_mqtt()
    subscribe(client, dbconn)

    # Using the PAHO loop is run indefinitely
    # The loop automatically handles recconects
    client.loop_forever()

run()