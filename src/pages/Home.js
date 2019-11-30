//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text} from 'react-native';
// import all basic components

export default class Screen1 extends Component {
  static navigationOptions = ({screenProps: {t}}) => ({
    title: t('foo'),
  });
  //Screen1 Component

  /* componentDidMount() {
    return fetch(
      // 'https://facebook.github.io/react-native/movies.json'
      // 'http://192.168.1.70:8888/graphql'
      'http://xangdau.proj.fgct.net:8081/graphql'
    )
      .then(response => response.text()) // response.json()
      .then(responseJson => {
        console.log({responseJson});
      })
      .catch(error => {
        console.error(error);
      });
  } */

  render() {
    let {t, locale} = this.props.screenProps;

    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> HomeScreen </Text>
        <Text>{t('bar', {someValue: Date.now()})}</Text>
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
