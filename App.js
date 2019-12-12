//This is an example code for NavigationDrawer//
import 'react-native-gesture-handler';
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Image, TouchableOpacity } from 'react-native';
// import all basic components

import { Icon, Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import i18n from './src/i18n';
import './src/lib/Init';
import { useTranslation, translate, Trans } from 'react-i18next';
// import { Trans } from 'react-i18next';
// import PriceUnitList from './src/pages/PriceUnit/List';
import DetailsPriceUnitScreen from './src/pages/PriceUnit/Details';
import EditPriceUnitScreen from './src/pages/PriceUnit/Edit';
// import HomeScreen from './src/pages/Home';
import Screen3 from './src/pages/Screen3';
import PriceUnitList from './src/screens/PriceUnitScreen';
import PriceUnitScreen from './src/screens/PriceUnitScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import Assets from './src/constants/assets';
import DrawerScreen from './src/screens/DrawerScreen ';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./src/assets/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },

});

const TabNavigator = createBottomTabNavigator({
  Feed: Screen3_StackNavigator,
  Profile: Screen3_StackNavigator,
});

// const DrawerNavigatorExample = createDrawerNavigator(
//   {
//     Home: {
//       //Title
//       screen: createStackNavigator({
//         //All the screen from the Screen2 will be indexed here
//         Second: {
//           screen: HomeScreen,
//           navigationOptions: ({navigation}) => ({
//             // title: 'Demo Screen 2',
//             headerLeft: (
//               <NavigationDrawerStructure navigationProps={navigation} />
//             ),
//           }),
//         },
//       }),
//       navigationOptions: {
//         drawerLabel: 'Home',
//       },
//     },
//     PriceUnitScreen: {
//       screen: createBottomTabNavigator({
//         Import: createStackNavigator({
//           List: {
//             screen: props => <PriceUnitList {...props} typePrice={'import'} />,
//             navigationOptions: ({navigation}) => ({
//               title: 'Danh sách đơn giá: Nhập Hàng',
//               // headerTitle: () => <Text>Quản lý đơn giá</Text>,
//               headerLeft: (
//                 <NavigationDrawerStructure navigationProps={navigation} />
//               ),
//             }),
//           },
//         }),
//         Export: createStackNavigator({
//           List: {
//             screen: props => <PriceUnitList {...props} typePrice={'export'} />,
//             navigationOptions: ({navigation}) => ({
//               title: 'Danh sách đơn giá: Xuất Hàng',
//               // headerTitle: () => <Text>Quản lý đơn giá</Text>,
//               headerLeft: (
//                 <NavigationDrawerStructure navigationProps={navigation} />
//               ),
//             }),
//           },
//         }),
//       }),
//       navigationOptions: {
//         drawerLabel: 'Đơn giá',
//       },
//     },
//     DetailsPriceUnitScreen: {
//       screen: createStackNavigator({
//         Details: {
//           screen: DetailsPriceUnitScreen,
//           // screen: EditPriceUnitScreen,
//           navigationOptions: ({ navigation }) => {
//             const item = navigation.getParam('item');

//             return {
//               title: 'Chi tiết đơn giá',
//               // headerTitle: () => <Text>Chi tiết đơn giá</Text>,
//               headerLeft: () => (
//                 <Button
//                   onPress={() => navigation.goBack(null)}
//                   icon={
//                     <Icon name="arrow-back" size={15} color="white" />
//                   }
//                 />
//               ),
//               headerRight: () => (
//                 <Button
//                   onPress={() => navigation.dispatch(NavigationActions.navigate({
//                     routeName: 'DetailsPriceUnitScreen',
//                     params: {},
//                     action: NavigationActions.navigate({ routeName: 'Edit', params: { id: item.id, item } }),
//                   }))}
//                   icon={<Icon
//                     name="edit"
//                     size={15}
//                     color="white"
//                   />}
//                 />
//               ),
//             };
//           },
//         },
//         Edit: {
//           screen: EditPriceUnitScreen,
//           navigationOptions: ({navigation}) => ({
//             title: 'Edit',
//             // headerTitle: () => <Text>Chi tiết đơn giá</Text>,
//             headerLeft: () => (
//               <Button
//                 onPress={() => navigation.goBack(null)}
//                 icon={
//                   <Icon name="cancel" size={15} color="white" />
//                 }
//               />
//             ),
//             headerRight: () => (
//               <Button
//                 onPress={() => console.log('Save')}
//                 icon={<Icon
//                   name="save"
//                   size={15}
//                   color="white"
//                 />}
//               />
//             ),
//           }),
//         },
//       }),
//       navigationOptions: {
//         drawerLabel: () => null,
//       },
//     },
//     Screen3: {
//       //Title
//       screen: Screen3_StackNavigator,
//       navigationOptions: {
//         drawerLabel: 'Demo Screen 3',
//       },
//     },
//     Screen4: {
//       //Title
//       screen: Screen3_StackNavigator,
//       navigationOptions: {
//         drawerLabel: 'Demo Screen 3',
//       },
//     },
//   },
//   {
//     initialRouteName: 'PriceUnitScreen',
//   },
// );

const MenuImage = ({navigation}) => {
  if(!navigation.state.isDrawerOpen){
      return <Image source={Assets.Images.drawer}/>
  }else{
      return <Image source={Assets.Images.back}/>
  }
}


const DrawerNavigator = createDrawerNavigator({
  Login: LoginScreen,
    Home: HomeScreen,
    PriceUnit: PriceUnitScreen,
},{
  initialRouteName: 'Home',
  contentComponent: DrawerScreen,
  drawerWidth: 300
});


const StackNavigator = createStackNavigator({
  DrawerNavigator:{
      screen: DrawerNavigator
  }
},{
  navigationOptions: ({ navigation }) => ({
      title: 'ReactNavigation',  // Title to appear in status bar
      headerLeft: 
      <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
          <Text>Abcd</Text>
      </TouchableOpacity>,
      headerStyle: {
          backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

  })
});




const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  state = {
    locale: 'vi', // Localization.locale,
  };

  setLocale = locale => {
    this.setState({ locale });
  };

  t = (scope, options) => {
    return i18n.t(scope, { locale: this.state.locale, ...options });
  };

  render() {
    return (
      <AppContainer
        screenProps={{
          t: this.t,
          locale: this.state.locale,
          setLocale: this.setLocale,
        }}
      />
    );
  }
}
