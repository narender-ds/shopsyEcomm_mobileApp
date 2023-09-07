import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import accountImg from '../assets/SplashScreen.png';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const DrawerMenu = ({navigation}) => {
  const itemNavigation = screenName => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={{color: 'black'}}>Menu</Text>
        <FontAwesome name="bell-o" size={20} color="#000" />
      </View>
      <View
        style={{
          borderColor: 'gray',
          borderWidth: 1,
        }}
      />
      <View style={styles.menuContainer}>
        <View style={styles.accountContainer}>
          <View style={styles.accountImg}>
            <Image
              source={accountImg}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                borderRadius: 50,
              }}
            />
          </View>
          <Text style={styles.accountDetail}>Admin</Text>
          <View style={styles.desDetail}>
            <Entypo name="chevron-small-down" size={20} color="#000" />
          </View>
        </View>
        <TouchableOpacity
          style={[styles.menuItemContainer, {marginTop: 10}]}
          onPress={() => itemNavigation('CartScreen')}>
          <Feather name="shopping-cart" size={20} color="#000" />
          <Text style={styles.menuItemTxt}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItemContainer}
          onPress={() => itemNavigation('Register')}>
          <Entypo name="login" size={20} color="#000" />
          <Text style={styles.menuItemTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItemContainer} onPress={()=>itemNavigation("SettingsScreen")}>
          <Feather name="settings" size={20} color="#000" />
          <Text style={styles.menuItemTxt}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    padding: 10,
  },
  menuContainer: {
    marginTop: 20,
    marginHorizontal: 18,
  },
  menuItemContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
  },
  menuItemTxt: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: '700',
    color: 'black',
  },
  accountContainer: {
    borderRadius: 100,

    flexDirection: 'row',
    overflow: 'hidden',
  },
  accountImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountDetail: {
    paddingLeft: 20,
    fontSize: 16,
    flex: 7,
    color: 'black',
  },
  desDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DrawerMenu;
