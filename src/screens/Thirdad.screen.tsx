import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles/Thirdad.styles';

const ThirdadScreen = ({ navigation }: any) => {

  const handleNext = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/ad3.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Congratulations !</Text>
        <Text style={styles.subtext}>You're ready to start using {'\n'}'DOO-IT' to manage your tasks and {'\n'}stay organized.</Text>
      </View>

      <TouchableOpacity onPress={handleNext} style={styles.nextContainer}>
        <Text style={styles.nextText}>{"Let's go  >>"} </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ThirdadScreen;
