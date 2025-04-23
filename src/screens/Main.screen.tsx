import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/Main.styles';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        navigation.replace('Home');
      } else {
        setLoading(false); // allow showing button
      }
    };

    checkLoginStatus();
  }, [navigation]);

  if (loading) {
    return (
        <LinearGradient colors={['#2D8ED7', '#693FDC']} style={styles.gradient}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/logoBig.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.title}>DOO-IT</Text>
            </View>
        </LinearGradient>
      );
    }
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
                    onPress={() => navigation.navigate('Login')}
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

export default MainScreen;
