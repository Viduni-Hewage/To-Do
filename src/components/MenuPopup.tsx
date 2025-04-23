import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/MenuPopup.styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

interface MenuPopupProps {
  visible: boolean;
  onClose: () => void;
}

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Login: undefined;
};

type MenuPopupNavigationProp = StackNavigationProp<RootStackParamList>;

const MenuPopup = ({ onClose, visible }: MenuPopupProps) => {
  const slideAnim = useRef(new Animated.Value(width)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [shouldRender, setShouldRender] = useState(visible);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const navigation = useNavigation<MenuPopupNavigationProp>();

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0.4,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: width,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShouldRender(false);
    });}
  }, [backdropOpacity, slideAnim, visible]);

  const handleNavigation = (screen: string) => {
    setSelectedItem(screen);
    setTimeout(() => {
      navigation.navigate(screen as never);
      onClose();
    }, 200);
  };

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    navigation.replace('Login');
    onClose();
  };

  if (!shouldRender) {return null;}

  return (
    <>
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.backdrop, { opacity: backdropOpacity }]} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
        <TouchableOpacity onPress={onClose} style={styles.closeButtonTop}>
          <Image
              source={require('../assets/cross.png')}
              style={styles.closeimage}
              resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.headingRow}>
          <Text style={styles.heading}>Hi..........</Text>
          <Image
            source={require('../assets/wave.png')}
            style={styles.wave}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => handleNavigation('Home')}
          style={[
            styles.item,
            selectedItem === 'Home' && styles.activeItem,
          ]}
        >
          <Image
            source={require('../assets/home.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation('Profile')}
          style={[
            styles.item,
            selectedItem === 'Profile' && styles.activeItem,
          ]}
        >
          <Image
            source={require('../assets/profile.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation('Settings')}
          style={[
            styles.item,
            selectedItem === 'Settings' && styles.activeItem,
          ]}
        >
          <Image
            source={require('../assets/settings.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>

        <View style={styles.signOutContainer}>
          <TouchableOpacity
            style={styles.signOutRow}
            onPress={handleSignOut}
          >
            <Text style={styles.signoutText}>Sign Out</Text>
            <Image
              source={require('../assets/signout.png')}
              style={styles.signoutImage}
              resizeMode="contain"
            />
            </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
};

export default MenuPopup;
