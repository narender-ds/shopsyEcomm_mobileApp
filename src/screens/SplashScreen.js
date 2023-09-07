import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, StyleSheet, Image, StatusBar, } from 'react-native';


const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);
  return <View style={styles.mainContainer}>
    <StatusBar backgroundColor={'#03052b'}/>
    <Image source={require('../assets/SplashScreen.png')} style={styles.img} />
  </View>;
};
//StyleSheet Property
const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#03052b',
    },
    img: {
      width: 200,
      height: 200,
      borderRadius: 115,
      backgroundColor: 'red',
      // resizeMode:'cover',
    },
  });
export default SplashScreen;
