import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LoginContainer from '../containers/LoginContainer';

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Đăng nhập hệ thống',
    };
    render() {
        return (
            <View>
                <LoginContainer navigation = {this.props.navigation} />
            </View>
        )
    }
}




export default LoginScreen;