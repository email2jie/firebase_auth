import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm.js';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp( 
      {
        apiKey: "AIzaSyBLrzG4wg31MSl2Z7JqbK2di64uCUtpMUw",
        authDomain: "rn-auth-774ad.firebaseapp.com",
        databaseURL: "https://rn-auth-774ad.firebaseio.com",
        projectId: "rn-auth-774ad",
        storageBucket: "rn-auth-774ad.appspot.com",
        messagingSenderId: "855962926595"
      });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication">
        </Header>
        <LoginForm />
      </View>	
    )
  }


}

export default App;
