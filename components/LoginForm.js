import React, { Component } from 'react'
import * as firebase from "firebase";
import { Text } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'

export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress = () => {
        const { email, password } = this.state

        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail)
        });
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner size='small'/>
        }
        return (
            <Button onPress={this.onButtonPress}>
                        Log in
            </Button>
        )
    }

    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    onLoginFail = () => {
        this.setState({ error: 'Authentication failed', loading: false })
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@gmail.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label='Password'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password})}
                    />
                </CardSection>
                <Text style={styles.errorStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorStyle: {
       fontSize: 20,
       alignSelf: 'center',
       color: 'red'
    }
}