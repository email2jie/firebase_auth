import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { CardSection, Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm.js';

class App extends Component {

  state = { loggedIn: null };

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      }else {
        this.setState({loggedIn: false});
      }

    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
          );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner />
          </View>
          );

  }
}

render() {
  return (
    <View>
      <Header headerText="Authentication">
      </Header>
        {this.renderContent()}
    </View>	
  )
}


}

const styles = {
  spinnerStyle: {
    paddingTop: 50
  }
};

export default App;
