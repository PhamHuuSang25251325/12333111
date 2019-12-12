/**
* @format
*/

import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux'
import './src/i18n';
import AppContainer from './App';
import { name as appName } from './app.json';
import store from './src/store';
import client from './src/lib/Client';
import NavigationContainer from './src/navigation/NavigationContainer';
// import * as Font from 'expo-font'

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };

const App = () => {
  // const [fontLoaded, setFontLoaded] = useState(false);
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => {
  //         setFontLoaded(true);
  //       }}
  //     />
  //   );
  // }
  return (
    <Provider store={store} >
      <NavigationContainer />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
