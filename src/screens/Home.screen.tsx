import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Home.styles';
import CustomHeader from '../components/Header';
import MenuPopup from '../components/MenuPopup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';


const HomeScreen = ({ navigation }: any) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const loadTasks = async () => {
        try {
          const storedTasks = await AsyncStorage.getItem('tasks');
          if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
          }
        } catch (error) {
          console.error('Error loading tasks:', error);
        }
      };
      loadTasks();
    }, [])
  );

  const deleteTask = async (index: number) => {
    try {
      const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
      setTasks(updatedTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader canGoBack={false} onMenuPress={() => setMenuVisible(true)} />

      <View style={styles.centerBox}>
        <Text style={styles.centerText}>Wed, 09 April</Text>
      </View>

      <Text style={styles.bottomText}>Hi ,</Text>

      <ScrollView style={{ marginTop: 10, paddingHorizontal: 20 }}>
        {tasks.map((task, index) => (
          <LinearGradient
            key={index}
            colors={['#1288B0', '#9CDCF1', '#1288B0']}
            style={styles.taskBox}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.taskTitleContainer}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Edittask', { task, index })}>
                <Text style={styles.edit}>EDIT</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.description}>{task.description}</Text>
            <View style={styles.underline} />
            <View style={styles.dateAndTrashContainer}>
                <Text style={styles.dateTime}>
                  {new Date(task.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}{' '}   {new Date(task.date).toDateString()}
                </Text>
                <TouchableOpacity
                  style={styles.trashIconContainer}
                  onPress={() => deleteTask(index)}
                >
                  <Image
                    source={require('../assets/trash.png')}
                    style={styles.trashIcon}
                  />
                </TouchableOpacity>
            </View>
          </LinearGradient>
        ))}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Button title="Add new task  +" onPress={() => navigation.navigate('Addtask')} />
      </View>

      {<MenuPopup visible = {isMenuVisible} onClose={() => setMenuVisible(false)}  />}
    </View>
  );
};

export default HomeScreen;


