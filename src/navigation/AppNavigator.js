import React from 'react';

import {
    createSwitchNavigator,
    createAppContainer,

} from 'react-navigation';

import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import { Platform, SafeAreaView, Button, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import PriceUnitScreen from '../screens/PriceUnitScreen';
import PriceUnitActionScreen from '../screens/PriceUnitActionScreen';
import CashFundScreen from '../screens/CashFundScreen';
import CashFundActionScreen from '../screens/CashfundActionScreen';
import StartupScreen from '../screens/StartupScreen';
import Colors from '../constants/colors';
import { logout } from '../actions/auth'

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    // headerTitleStyle: {
    //     fontFamily: 'open-sans-bold'
    // },
    // headerBackTitleStyle: {
    //     fontFamily: 'open-sans'
    // },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const AuthNavigator = createStackNavigator(
    {
        Auth: LoginScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
);


const PriceUnitsNavigator = createStackNavigator(
    {
        PriceUnitsOverview: PriceUnitScreen,
        PriceUnitAction: PriceUnitActionScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
)

const CashFundsNavigator = createStackNavigator(
    {
        CashFundsOverview: CashFundScreen,
        CashFundAction: CashFundActionScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
)



const AppNavigator = createDrawerNavigator(
    { 
        CashFunds: CashFundsNavigator,
        PriceUnits: PriceUnitsNavigator,
       
    },
    {
        contentOptions: {
            activeTintColor: Colors.primary
        },
        contentComponent: props => {
            const dispatch = useDispatch();
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...props} />
                        <Button
                            title="Logout"
                            color={Colors.primary}
                            onPress={() =>{
                                dispatch(logout())
                            }}
                        />
                    </SafeAreaView>
                </View>
            );
        }
    }
)

const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Auth: AuthNavigator,
    App: AppNavigator
});

export default createAppContainer(MainNavigator);














