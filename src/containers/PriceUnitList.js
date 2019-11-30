import React, { useEffect, useState } from 'react'
import { Text, Alert, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import withSpinner from '../utils/withSpinner';
import priceUnitService from '../services/priceUnit';
import {fetchPriceUnits} from '../actions/PriceUnit'

const  ScrollViewWithSpinner = withSpinner(ScrollView);



const PriceUnitList = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const list = useSelector(state => state.priceUnit.list);
    const type= props.typePrice;
    debugger
    console.log(props.navigation.state.params);
    
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(123);
        
        setIsLoading(true);
        priceUnitService.fetchPriceUnit(type).then(data => {
            setIsLoading(false);
            dispatch(fetchPriceUnits(data));
        }).catch(err => {
            Alert.alert(err.message)
        })
    }, [type])


    return (
        <ScrollViewWithSpinner isLoading={isLoading}>
            <Text>{list.length}</Text>
        </ScrollViewWithSpinner>
    )
}

export default PriceUnitList;