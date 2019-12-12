import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cashFundService from '../services/cashFund';
import { list } from '../actions/cashFund';
import { Row, Grid, Col } from "react-native-easy-grid";
import { Text } from 'react-native'
import CashFundList from '../components/cashFund/ListItem';
import { Button } from 'react-native-elements';


const CashFundContainer = ({ navigation }) => {
    const [page, setPage] = useState(1);
    const dispacth = useDispatch();
    const items = useSelector(state => state.cashFund.list)

    const loadCashFunds = useCallback(() => {
        cashFundService.fetchcashFund(page)
            .then(data => {
                dispacth(list(data));
            })
            .catch(err => {
                console.log(err);

            })
    }, [page, dispacth])

    useEffect(() => {
        loadCashFunds()
    }, [loadCashFunds])

    console.log(items);

    return (
        <Grid>
            <Row size={1.5} style={{ backgroundColor: "#FF9933", marginBottom: 10 }}>
                <Text>Search</Text>
            </Row>
            <Row size={0.5}>

                <Col size={8}>
                    <Text>Danh sách quỹ tiền mặt</Text>
                </Col>
                <Col size={2}><Button icon={{
                    name: "add-circle",
                    color: "white"
                }} onPress={()=>navigation.navigate('CashFundAction')}/></Col>
            </Row>
            <Row size={8} style={{ backgroundColor: "#99CC99", marginTop: 10 }}>
                <CashFundList items={items} />
            </Row>
        </Grid>
    )
}

export default CashFundContainer;
