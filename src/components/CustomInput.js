import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';

const CustomInput = ({
  keyboardType,
  placeholder,
  inputStyle = {},
  inputLeftIcon,
  inputRightIcon,
  isPassword = false,
  onChangeText,
  name
}) => {
  return (
    <View style={style.mainContainer}>
      {inputLeftIcon && (
        <View style={style.leftIconContainer}>
          <Image
            source={inputLeftIcon}
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
        </View>
      )}
      <TextInput
        style={[style.textInput, inputStyle]}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        onChangeText={onChangeText}
        name={name}
      />
      {inputRightIcon && (
        <View style={style.rightIconContainer}>
          <Image
            source={inputRightIcon}
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
        </View>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    marginBottom: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    overflow: 'hidden',
    marginHorizontal: 18,
  },
  textInput: {
    backgroundColor: '#EAEAEA',
    paddingLeft: 20,
    fontSize: 16,
    flex: 7,
    color: '#777777',
    
  },
  leftIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',

  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',

  },
});

export default CustomInput;
