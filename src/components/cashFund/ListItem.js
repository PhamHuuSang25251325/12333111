import React from 'react'
import { FlatList } from 'react-native'
import CashFundItem from './Item'

const CashFundList = ({ items }) => {
    return (
        <FlatList
            keyExtractor={item=>item.id}
            data={items}
            renderItem={({item})=><CashFundItem item={item}/>}
            
        />
    )
}

export default CashFundList;