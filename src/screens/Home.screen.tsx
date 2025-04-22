import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import styles from '../styles/Home.styles';
import CustomHeader from '../components/Header';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <CustomHeader canGoBack={false} />

      {/* Main Text Box */}
      <View style={styles.centerBox}>
        <Text style={styles.centerText}>Wed, 09 April</Text>
      </View>

      <Text style={styles.bottomText}>Hi ,</Text>

      {/* Bottom Text and Button */}
      <View style={styles.bottomContainer}>
        <Button title="Add new task  +" onPress={() => navigation.navigate('Addtask')} />
      </View>
    </View>
  );
};

export default HomeScreen;
