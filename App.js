import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase";
import { Header, Button, Spinner, CardSection } from './components/common'
import LoginForm from './components/LoginForm'

const config = {  
  apiKey: "AIzaSyAU9hTniMDcdqTt6JVpJXmvtvdx2LWjObA",
  authDomain: "authentication-f7d92.firebaseapp.com",
  databaseURL: "https://authentication-f7d92.firebaseio.com",
  projectId: "authentication-f7d92",
  storageBucket: "authentication-f7d92.appspot.com",
  messagingSenderId: "832980071448",
  appId: "1:832980071448:web:acc55c69d116536b3d7f6d",
  measurementId: "G-HY4VYTHY59"};


export default class App extends Component {
  state = {
    loggedIn: null
  }
  componentDidMount() {
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <CardSection>
         
          <Button onPress = {() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
          )
      case false: 
        return <LoginForm />
      default:
        return <Spinner size='large' />
    }
  }
 
  render() {
      return (
        <View>
          <Header headerText='Authentication' />
          {this.renderContent()}
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
