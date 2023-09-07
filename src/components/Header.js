import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const Header = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
      }}
      onPress={() => navigation.toggleDrawer()}>
      <Entypo name="menu" size={30}/>
    </TouchableOpacity>
  );
};

export default Header;
