import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.title}>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'gray',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
