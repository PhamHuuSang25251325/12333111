import React from 'react'
import {Text,View} from 'react-native'
import PriceUnitContainer from './../containers/PriceUnitList'


const PriceUnitScreen = (props) =>{
    return (
        <View>
          <PriceUnitContainer {...props}/>
        </View>
    )
}


export default PriceUnitScreen;