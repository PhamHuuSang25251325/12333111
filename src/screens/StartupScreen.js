import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import Colors from '../constants/colors'
import { AUTHENTICATE } from '../actions/auth';



const StartupScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('user');
            if (!userData) {
                navigation.navigate('Auth');
                return;
            }
            const userInfo = JSON.parse(userData);
            const { userId, token } = userInfo;
            navigation.navigate('App');
            dispatch({
                type: AUTHENTICATE,
                payload: {
                    userId,
                    token
                }
            })
        }
        tryLogin();

    }, [dispatch])

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StartupScreen;