import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles/Secondad.styles';

const SecondadScreen = ({ navigation }: any) => {
  const handleSkip = () => {
    navigation.navigate('Home');
  };

  const handleNext = () => {
    navigation.navigate('Thirdad');
  };

  return (
    <ImageBackground
      source={require('../assets/ad2.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <TouchableOpacity onPress={handleSkip} style={styles.skipContainer}>
        <Text style={styles.skipText}>{'Skip  >>'} </Text>
      </TouchableOpacity>

      <View style={styles.overlay}>
        <Text style={styles.text}>Stay Productive</Text>
        <Text style={styles.subtext}>Track your progress and stay {'\n'}focused with a simple, distraction-free interface.</Text>
      </View>

      <TouchableOpacity onPress={handleNext} style={styles.nextContainer}>
        <Text style={styles.nextText}>{'Next  >>'} </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SecondadScreen;
