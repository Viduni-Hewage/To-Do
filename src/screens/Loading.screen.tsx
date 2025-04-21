import React, { useEffect } from 'react';
import {View, Text, Image} from 'react-native';

import styles from '../styles/Loading.styles';
import LinearGradient from 'react-native-linear-gradient';

type LoadingScreenProps = {
    navigation: any;
  };

const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={['#2D8ED7', '#693FDC']} style={styles.gradient}>
      <View style={styles.container}>
    <View>
      <Image
        source={require('../assets/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
    <View style={styles.textWrapper}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  </View>
    </LinearGradient>

  );
};

export default LoadingScreen;

