import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles/Firstad.styles';

const FirstadScreen = ({ navigation }: any) => {
  const handleSkip = () => {
    navigation.navigate('Home');
  };

  const handleNext = () => {
    navigation.navigate('Secondad');
  };

  return (
    <ImageBackground
      source={require('../assets/ad1.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <TouchableOpacity onPress={handleSkip} style={styles.skipContainer}>
        <Text style={styles.skipText}>{'Skip  >>'} </Text>
      </TouchableOpacity>

      <View style={styles.overlay}>
        <Text style={styles.text}>Organize your tasks</Text>
        <Text style={styles.subtext}>Keep your targets organized by {'\n'}date!</Text>
      </View>

      <TouchableOpacity onPress={handleNext} style={styles.nextContainer}>
        <Text style={styles.nextText}>{'Next  >>'} </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default FirstadScreen;
