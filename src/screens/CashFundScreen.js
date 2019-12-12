import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Row, Grid } from "react-native-easy-grid";
import CashFundContainer from '../containers/CashFundsContainer';



class CashFundScreen extends Component {
    constructor(props){
        super(props)
        this.state= {
            isFocus : true
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'QUỸ TIỀN MẶT',
            // headerLeft: <DrawerButton navigation={navigation} />
        }
    }

    
    render() {
        return (
            <CashFundContainer navigation = {this.props.navigation} isFocus={this.state.isFocus} />
        )
    }
}

export default CashFundScreen;