import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import styles from '../styles/Home.styles';
import CustomHeader from '../components/Header';
import MenuPopup from '../components/MenuPopup';


const HomeScreen = ({ navigation }: any) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <CustomHeader canGoBack={false} onMenuPress={() => setMenuVisible(true)} />

      <View style={styles.centerBox}>
        <Text style={styles.centerText}>Wed, 09 April</Text>
      </View>

      <Text style={styles.bottomText}>Hi ,</Text>

      <View style={styles.bottomContainer}>
        <Button title="Add new task  +" onPress={() => navigation.navigate('Addtask')} />
      </View>

      {<MenuPopup visible = {isMenuVisible} onClose={() => setMenuVisible(false)}  />}
    </View>
  );
};

export default HomeScreen;


