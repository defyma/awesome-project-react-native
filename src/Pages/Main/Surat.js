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

class Surat extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        this.props.dispatch({
            type: 'SET_IS_LOGOUT',
        });
        this.props.navigation.navigate('Login')
    }

    render() {
        return(
            <View>
                <Button onPress={() => this.logout()}>
                    <Text>Logout From Surat</Text>
                </Button>
            </View>
        )
    }
}

export default connect()(Surat);
