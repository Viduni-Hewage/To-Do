import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/Main.styles';
import LinearGradient from 'react-native-linear-gradient';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#2D8ED7', '#693FDC']} style={styles.gradient}>
        <View style={styles.container}>
            <Image
                source={require('../assets/logoBig.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.title}>DOO-IT</Text>

            <View style={{ flex: 1 }} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login' as never)}
            >
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Get Started</Text>
                    <Image
                        source={require('../assets/front.png')}
                        style={styles.arrow}
                        resizeMode="contain"
                    />
                </View>

            </TouchableOpacity>
        </View>
    </LinearGradient>
  );
};

export default StartScreen;
