import React, { useEffect, useState, useCallback } from 'react'
import { Text, Alert, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import withSpinner from '../utils/withSpinner';
import priceUnitService from '../services/priceUnit';
import {fetchPriceUnits} from '../actions/PriceUnit'

const  ScrollViewWithSpinner = withSpinner(ScrollView);



const PriceUnitList = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const list = useSelector(state => state.priceUnit.list);
    const dispatch = useDispatch();

    const loadPriceUnits = useCallback(async (type)=>{
        try {
            await dispatch (fetchPriceUnits(type,1))
        } catch (error) {
            
        }
    },[dispatch])

    useEffect(() => {
        setIsLoading(true);
        loadPriceUnits('export').then(()=>{
            setIsLoading(false)
        })
    }, [loadPriceUnits])

    console.log(isLoading);
    


    return (
        <ScrollViewWithSpinner isLoading={isLoading}>
            <Text>{list.length}</Text>
        </ScrollViewWithSpinner>
    )
}

export default PriceUnitList;