import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.topHeading}>Welcome to DashBoard</Text>
      <View style={styles.childContainer}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Go to Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {flex: 0.3, alignItems: 'center', justifyContent: 'center'},
  topHeading: {
    color: 'red',
    fontSize: 20,
  },
  childContainer: {
    margin: 50,
  },
});

export default Home;
