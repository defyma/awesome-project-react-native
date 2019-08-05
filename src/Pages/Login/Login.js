import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Button} from 'native-base';
import {connect} from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    login() {
        this.props.dispatch({
            type: 'SET_IS_LOGIN',
        });
        this.props.navigation.navigate('Main')
    }

    render() {
        return(
            <View>
                <Button onPress={() => this.login()}>
                    <Text>Login</Text>
                </Button>
            </View>
        )
    }
}

export default connect()(Login);
