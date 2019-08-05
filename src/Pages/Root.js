import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import {Button} from 'native-base';
import {connect} from 'react-redux';

class Root extends Component {
    constructor(props) {
        super(props);
        this._cekState();
    }

    _cekState() {
        const {appIsLogin} = this.props;
        if(appIsLogin) {
             this.props.navigation.navigate('Main');
        } else {
             this.props.navigation.navigate('Login');
        }
    }

    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    appIsLogin: state.AppReducerPersist.appIsLogin
});

export default connect(mapStateToProps)(Root);
