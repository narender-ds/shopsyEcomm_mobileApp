import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './SplashScreen';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ProductsScreen from './ProductsScreen';
import DrawerMenu from '../components/DrawerMenu';
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import Setting from './SettingsScreen';
import CartScreen from './CartScreen';
import SettingsScreen from './SettingsScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductsScreen" component={DrawerNav} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}} drawerContent={DrawerMenu}>
      {/* <Drawer.Screen name="ProductsScreen" component={ProductsScreen} /> */}
      <Drawer.Screen name="TabBar" component={TabBar} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Setting" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
const TabBar=()=> {
  return (
    <Tab.Navigator
    initialRouteName="TabScreen"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      headerShown: false
    }}
    
  >
    <Tab.Screen
      name="TabScreen"
      component={ProductsScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home"  size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings"  size={25} />
        ),
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="shopping-cart"  size={25} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
export default AppNavigator;
