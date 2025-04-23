import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import styles from '../styles/Login.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^[A-Za-z0-9@#\$%\^&\*\!\?]+$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async () => {
    let valid = true;

    if (!email) {
      setEmailError('* Email is required');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('* Enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('* Password is required');
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('* Only letters, numbers and @, #, !, %, & allowed');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!valid) {return;}
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.replace('Home');
    } catch (error) {
      Alert.alert('Login Failed', 'Something went wrong. Please try again.');
      console.log('Error saving login status:', error);
    }
  };

  const handleNavigateToSignin = () => {
    navigation.navigate('SignIn');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>DOO-IT</Text>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
        <Text style={styles.subtitle1}>Welcome Back !</Text>
        <Text style={styles.subtitle2}>Create your timing!</Text>

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => {
            setEmail(text);
            if (emailError && validateEmail(text)) setEmailError('');
          }}
          value={email}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
            if (passwordError && validatePassword(text)) setPasswordError('');
          }}
          value={password}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <View style={styles.buttonContainer}>
          <Button title="TAKE ME IN" onPress={handleLogin} />
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleNavigateToSignin}>
            <Text style={styles.linkText}>Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
