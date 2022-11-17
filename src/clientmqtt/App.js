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
      topic: '',
      subscribedTopic: '',
      message: '',
      messageList: [],
      status: '',
      ip: '',
      port: 0,
      severity: '',
    };

    // client.onConnectionLost = this.onConnectionLost;
    // client.onMessageArrived = this.onMessageArrived;
  }

  onConnectionLost = responseObject => {
    // TODO: onConnectionLost
  };

  onMessageArrived = message => {
    // TODO: onMessageArrived
  };

  subscribeTopic = () => {
    // TODO: subscribeTopic
  };

  onConnect = () => {
    // TODO: onConnect
  };

  onFailure = err => {
    // TODO: onFailure
  };

  connect = () => {
    //the host to which we want to connect
    const host = this.state.ip;

    //port number the host is listening to
    const port = this.state.port;

    console.log(this.state.ip + ":" + this.state.port)

    //our topic to publish and receive message
    const topic = "srv/temperature";

    try{
      // create a client instance,
      // "" is client id, if empty string is passed a random client id will be generated
      let client = new Paho.MQTT.Client(host, Number(port), "client_id");

      // will be called when new message arrives
      client.onMessageArrived = onMessage;

      //when connection is lost
      client.onConnectionLost = function(){document.write('Connection lost')};

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
  };

  unSubscribeTopic = () => {
    // TODO: unSubscribeTopic
  };

  sendMessage = () => {
    //get message form input box
    let contentMsg = this.state.port + ':' + this.state.severity + ':-23.22488,-45.232'

    //prepare the payload
    let data = JSON.stringify({contentMsg});
    let mgs = new Paho.MQTT.Message(data);
    mgs.destinationName = topic;

    //publish from here
    //client.send(contentMsg);
    console.log(contentMsg);
  };

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
              onPress={e => this.setState({severity: 'Low'})}
              buttonStyle={{backgroundColor: '#72F178', margin: 20}}
              style={styles.severityButtonContainer}
            />
            <Button
              type="solid"
              title="Medium"
              onPress={e => this.setState({severity: 'Medium'})}
              buttonStyle={{backgroundColor: '#FFF145', margin: 20}}
              style={styles.severityButtonContainer}
            />
            <Button
              type="solid"
              title="High"
              onPress={e => this.setState({severity: 'High'})}
              buttonStyle={{backgroundColor: '#E21100', margin: 20}}
              style={styles.severityButtonContainer}
            />
          </View>
        </View>
        <Button
          type="solid"
          title="UPDATE"
          onPress={this.sendMessage}
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