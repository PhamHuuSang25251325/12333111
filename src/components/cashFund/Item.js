import React, { useState } from 'react'

import { ListItem, Button, CheckBox } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { update } from '../../actions/cashFund'
import moment from 'moment'

const CashFundItem = ({ item }) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();


    return (
        <>
            {item.isApproved ? (
                <ListItem
                    title={moment(new Date(item.carryingDate)).format(
                        'DD/MM/YYYYY'
                    )}
                    subtitle={item.income ? `Thu: ${item.income}` : `Chi: ${item.outcome}`}
                    bottomDivider
                    chevron
                />
            ) : (
                    <ListItem
                        title={moment(new Date(item.carryingDate)).format(
                            'DD/MM/YYYYY'
                        )}
                        subtitle={item.income ? `Thu: ${item.income}` : `Chi: ${item.outcome}`}
                        bottomDivider
                        chevron
                        rightElement={item.checked && <Button title="Duyệt"/>}
                        leftElement={<CheckBox checked={item.checked} onPress={() => {
                            dispatch(update(item.id, {
                                ...item,
                                checked: !item.checked
                            }))
                        }} />}
                    />
                )}
        </>
    )
}

export default CashFundItem;