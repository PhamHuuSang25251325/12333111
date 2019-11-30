import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  WebView,
  Dimensions,
  Button,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import HTML from 'react-native-render-html';
import {priceById } from '../../actions/graphql/queries/PriceUnit';
import {CurrencyFormat, DateTimeFormat } from '../../lib/Helper';

export default () => {
  const { navigate } = useNavigation();
  const item = useNavigationParam('item');
  const { loading, error, data } = useQuery(priceById, {
    variables: {id: item.id}
  });

  console.log({ loading, error, data });

  if (loading) return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )

  if (error) return (
    <Text>{error.message}</Text>
  )

  return (
    <View
      style={styles.container}>
      <Text>Loại đơn giá: {item.type=='import' ? 'Nhập hàng' : 'Xuất hàng'}</Text>
      <Text>Thời điểm áp dụng: {DateTimeFormat(item.appliedDate)}</Text>
      <Text>Giá nhà nước: {CurrencyFormat(item.price)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    fontSize: 55
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})