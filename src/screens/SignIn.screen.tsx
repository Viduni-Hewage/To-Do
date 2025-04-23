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
} from 'react-native';
import styles from '../styles/SignIn.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validatePassword = (password: string) => {
    const pattern = /^[A-Za-z0-9@#]+$/;
    return pattern.test(password);
  };

  const handleLogin = async () => {
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('Password is invalid. (Use only letters, numbers or characters)');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!confirmpassword) {
      setConfirmPasswordError('Please confirm your password');
      valid = false;
    } else if (password !== confirmpassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (!valid) {return;}
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.replace('Firstad');
    } catch (error) {
      console.log('Error storing login status:', error);
    }
  };

  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
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
        <Text style={styles.subtitle1}>Let's make an account !</Text>
        <Text style={styles.subtitle2}>Create your timing!</Text>

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => {
            setEmail(text);
            if (emailError && validateEmail(text)) {setEmailError('');}
          }}
          value={email}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
            if (passwordError && validatePassword(text)) {setPasswordError('');}
          }}
          value={password}
        />
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
          onChangeText={(text) => {
            setConfirmPassword(text);
            if (confirmPasswordError && text === password) {setConfirmPasswordError('');}
          }}
          value={confirmpassword}
        />
        {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}

        <View style={styles.buttonContainer}>
          <Button title="SIGN IN" onPress={handleLogin} />
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleNavigateToLogin}>
            <Text style={styles.linkText}>Login here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
