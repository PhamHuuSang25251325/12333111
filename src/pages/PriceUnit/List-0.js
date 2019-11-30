//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text} from 'react-native';
// import all basic components
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import systemQuery from '../../graphql/querys/System.gql';
// import PriceUnitQuery from '../../graphql/querys/PriceUnit.gql';

/* const systemQuery = gql`query {
  testStatic
}
`; */

class ListScreen extends Component {
  static navigationOptions = ({ screenProps: { t } }) => ({  
    title: t('foo'), 
  });
  //Screen1 Component
  render() {
    let { t, locale } = this.props.screenProps;
    const { loading, queryName } = this.props.data;
    console.log({ loading, data: this.props.data });
    if (loading) {
      return <Text style={styles.outer}>Loading</Text>; 
    }
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> HomeScreen  </Text>
        <Text>{t('bar', { someValue: queryName })}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});

export default graphql(systemQuery)(ListScreen);
