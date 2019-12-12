import React, { Component } from 'react';
import { View, Text,Button } from 'react-native'
import DrawerButton from '../base_components/DrawerButton';

class HomeScreen extends Component {

    constructor(props) { 
        super(props)
     }

    static navigationOptions = ({navigation })=>{
        return {
            headerTitle : 'Home 11',
            headerLeft : <DrawerButton navigation={navigation}/>
        }
    }
    render() {
        return (
            <View>
                <Text>HomeScreen</Text>
                <Button title='Logout' onPress = {()=>this.props.navigation.navigate('Login')}/>
            </View>
        )
    }
}

export default HomeScreen;