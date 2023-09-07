import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import logo from '../assets/register_logo.png';
import CustomInput from '../components/CustomInput';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, registerUser} from '../redux/actions/RegisterAction';

const Register = () => {
  const navigation = useNavigation();
  const registration = useSelector(state => state.registration);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm();

  const onSubmit = data => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return;
    } else {
      dispatch(registerUser(data));
    }
    if (registration.error) {
      Alert.alert('Register', registration.error);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({field}) => (
            <CustomInput
              placeholder="Name"
              onChangeText={value => field.onChange(value)}
              value={field.value}
            />
          )}
          name="name"
          rules={{
            required: {value: true, message: 'Name is required'},
            minLength: {
              value: 2,
              message: 'Minimum 2 Characters required',
            },
          }}
          defaultValue=""
        />
        {errors.name && (
          <Text style={styles.errorText}>{errors.name.message}</Text>
        )}

        <Controller
          control={control}
          render={({field}) => (
            <CustomInput
              placeholder="Email"
              onChangeText={value => field.onChange(value)}
              value={field.value}
            />
          )}
          name="email"
          rules={{
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email must be valid',
            },
          }}
          defaultValue=""
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          render={({field}) => (
            <CustomInput
              placeholder="Phone"
              onChangeText={value => field.onChange(value)}
              value={field.value}
            />
          )}
          name="phone"
          rules={{
            required: {value: true, message: 'Phone is required'},
            minLength: {
              value: 10,
              message: 'Please Enter Valid Number',
            },
          }}
          defaultValue=""
        />
        {errors.phone && (
          <Text style={styles.errorText}>{errors.phone.message}</Text>
        )}
        <Controller
          control={control}
          render={({field}) => (
            <CustomInput
              placeholder={'Password'}
              onChangeText={value => field.onChange(value)}
              value={field.value}
              isPassword={true}
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
        <Controller
          control={control}
          render={({field}) => (
            <CustomInput
              placeholder={'Confirm Password'}
              isPassword={true}
              onChangeText={value => field.onChange(value)}
              value={field.value}
            />
          )}
          name="confirmPassword"
          rules={{
            required: {
              value: true,
              message: 'Confirm Password is required',
            },
            minLength: {
              value: 6,
              message: 'Please Enter More then 6 Characters',
            },
          }}
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.accountText}>Already Have An Account ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: '#39B54A',
    marginHorizontal: 15,
    width: '80%',
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
  },
  errorText: {
    color: 'red',
    marginLeft: 30,
  },
});

export default Register;
