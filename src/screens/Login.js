import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import loginLogo from '../assets/register_logo.png';
import emailIcon from '../assets/emails.png';
import passwordIcon from '../assets/password.png';
import closeEye from '../assets/CloseEye.png';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/LoginAction';
import {useForm, Controller} from 'react-hook-form';
const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loginCredentials=useSelector((state)=>state.login)
  const onLogin = data => {
    dispatch(login(data))
    if(loginCredentials){
      Alert.alert("Login",loginCredentials.loginData)
      navigation.navigate("ProductsScreen")
    }
    else{
      navigation.navigate("ProductsScreen")

    }
   };
  return (
    <View style={styles.maincontainer}>
      <Image style={styles.logo} source={loginLogo} />
      <Text style={styles.title}>Login</Text>
      <View style={[styles.inputContainer]}>
        <Controller
          control={control}
          render={({field}) => (
            <CustomInput
              placeholder={'Email'}
              keyboardType={'email-address'}
              inputLeftIcon={emailIcon}
              onChangeText={value => field.onChange(value)}
              value={field.value}
            />
          )}
          name="email"
          rules={{
            required: {value: true, message: 'Email is require'},
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email must be valid',
            },
          }}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          render={({field}) => (
            <CustomInput
              placeholder={'Password'}
              isPassword={true}
              inputLeftIcon={passwordIcon}
              inputRightIcon={closeEye}
              value={field.value}
              onChangeText={value => field.onChange(value)}
            />
          )}
          name="password"
          rules={{
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit(onLogin)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.accountText}
        onPress={() => navigation.navigate('Register')}>
        Don't Have Account ?
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    // width: '80%',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#39B54A',
    marginHorizontal: 15,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    marginLeft: 30,
  },
});

export default Login;
