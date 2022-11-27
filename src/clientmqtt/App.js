/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* @flow */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import init from 'react_native_mqtt';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topic: 'srv/info',
      subscribedTopic: '',
      message: '',
      messageList: [],
      status: '',
      ip: '',
      port: '',
      severity: 0,
    };

    var lastMsg;
  }

  onConnectionLost = (responseObject) => {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost: " + responseObject.errorMessage);
    }
    return -1;
  };

  onMessageArrived = (message) => {
    console.log("onMessageArrived: " + message.payloadString);
    lastMsg = message.payloadString;
  };

  subscribeTopic = () => {
    // TODO: subscribeTopic
  };

  onConnect = () => {
    client.subscribe(this.state.topic);
  };

  onFailure = err => {
    // TODO: onFailure
  };

  connect = () => {
    console.log(this.state.ip + ":" + this.state.port);

    try{
      // create a client instance,
      // "" is client id, if empty string is passed a random client id will be generated
      client = new Paho.MQTT.Client(this.state.ip, Number(this.state.port), "client_id");

      //when connection is lost
      client.onConnectionLost = this.onConnectionLost;

      // will be called when new message arrives
      client.onMessageArrived = this.onMessageArrived;

      // lets connect the client
      client.connect({
        onSuccess : () => {
          console.log("connected");

          // subscribe to the topic, we will publish message to this topic
          client.subscribe(this.state.topic);
          client.onConnectionLost = this.onConnectionLost;
          client.onMessageArrived = this.onMessageArrived;

        },
        onFailure : () => {
          console.log("failed to connect");
        }
      });
    }
    catch(err){
      console.log("Not connected!!");
    }

  };

  unSubscribeTopic = () => {
    // TODO: unSubscribeTopic
  };

  sendMessage = () => {
    //get message form input box
    // let contentMsg = 1 + ':' + this.state.severity + ':' + '-42.1233,99.1232';
    let la = 19.27 + (Math.random() * 0.03);
    let lo = -99.122 + (Math.random() * .02)
    let payload;
    payload = {
      "color": this.state.severity,
      "lat": la,
      "lon": lo
    }

    //prepare the payload
    //let data = JSON.stringify({contentMsg});
    //let mgs = new Paho.MQTT.Message(data);
    //mgs.destinationName = this.state.topic;
    let mgs = new Paho.MQTT.Message(JSON.stringify(payload));
    mgs.destinationName = this.state.topic;
    client.send(mgs);

    //publish from here
    // client.send(mgs);
  };

  keepSendingMessage = () => {
    var interval;
    clearInterval(interval);
    this.sendMessage;
    interval = setInterval(this.sendMessage, 10000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.connectContainer}>
          <Text style={styles.label}>Broker IP:</Text>
          <TextInput
            style={styles.input}
            value={this.state.ip}
            onChangeText={event => this.setState({ip: event})}
          />
        </View>
        <View style={styles.connectContainer}>
          <Text style={styles.label}>Broker Port:</Text>
          <TextInput
            style={styles.input}
            value={this.state.port}
            onChangeText={event => this.setState({port: Number(event)})}
          />
        </View>
        {this.state.status === 'connected' ? (
          <Button
            type="solid"
            title="DISCONNECT"
            onPress={() => {
              client.disconnect();
              clearInterval(interval);
              this.setState({status: '', subscribedTopic: ''});
            }}
            buttonStyle={{backgroundColor: '#397af8'}}
            disabled={!this.state.ip || !this.state.port}
          />
        ) : (
          <Button
            type="solid"
            title="CONNECT"
            onPress={this.connect}
            buttonStyle={{backgroundColor: '#72F178'}}
            disabled={!this.state.ip || !this.state.port}
          />
        )}
        <View style={styles.severityContainer}>
          <Text style={styles.label}>Severity</Text>
          <View style={styles.severityButtonContainer}>
            <Button
              type="solid"
              title="Low"
              onPress={e => this.setState({severity: 1})}
              buttonStyle={{backgroundColor: '#72F178', margin: 20}}
              style={styles.severityButtonContainer}
            />
            <Button
              type="solid"
              title="Medium"
              onPress={e => this.setState({severity: 2})}
              buttonStyle={{backgroundColor: '#FFF145', margin: 20}}
              style={styles.severityButtonContainer}
            />
            <Button
              type="solid"
              title="High"
              onPress={e => this.setState({severity: 3})}
              buttonStyle={{backgroundColor: '#E21100', margin: 20}}
              style={styles.severityButtonContainer}
            />
          </View>
        </View>
        <Button
          type="solid"
          title="UPDATE"
          onPress={this.keepSendingMessage}
          buttonStyle={{backgroundColor: '#127676'}}
          disabled={!this.state.severity}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  connectContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    padding: 10,
    marginLeft: 40,
    height: 50,
    width: 200,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  severityContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    height: 150,
    margin: 20,
    padding: 20,
  },
  severityButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
  },
  messageContainer: {
    margin: 20,
  },
  message: {
    padding: 10,
    height: 50,
    width: '100%',
    marginTop: 15,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export default App;