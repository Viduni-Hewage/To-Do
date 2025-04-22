import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/Header.styles';

const CustomHeader = ({ canGoBack = false }: { canGoBack?: boolean }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={{ backgroundColor: '#000', marginTop: -23 }}>
      <View style={styles.header}>
        <View style={styles.left}>
          {canGoBack && (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../assets/back.png')}
                style={styles.backIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.center}>
          <Text style={styles.title}>DOO-IT</Text>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity style={styles.right}>
          <Image
            source={require('../assets/menu.png')}
            style={styles.menu}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
