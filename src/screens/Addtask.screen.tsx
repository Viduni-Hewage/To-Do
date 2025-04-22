import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Addtask.styles';
import CustomHeader from '../components/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import MenuPopup from '../components/MenuPopup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTaskScreen = ({ navigation }: any) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const onChangeDate = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
      };
      const onChangeTime = (event: any, selectedTime?: Date) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(false);
        setTime(currentTime);
      };

      const saveTask = async () => {
        const task = { title, description, date: new Date(date), time: new Date(time) };
        try {
          const storedTasks = await AsyncStorage.getItem('tasks');
          const tasks = storedTasks ? JSON.parse(storedTasks) : [];
          tasks.push(task);
          await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
          console.error('Error saving task:', error);
        }
      };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader canGoBack={true} onMenuPress={() => setMenuVisible(true)}/>
      <View style={styles.container}>
        <Text style={styles.heading}>Add Task</Text>
        <View style={styles.underline} />

        <Text style={styles.label}>Task Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task title"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task description"
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Date</Text>
        <TouchableOpacity
            style={styles.inputIconContainer}
            onPress={() => setShowDatePicker(true)}
        >
            <Text style={styles.inputText}>{date.toDateString()}</Text>
            <Image
                source={require('../assets/calender.png')}
                style={styles.image1}
                resizeMode="contain"
            />
        </TouchableOpacity>

        <Text style={styles.label}>Time</Text>
        <TouchableOpacity
            style={styles.inputIconContainer}
            onPress={() => setShowTimePicker(true)}
        >
            <Text style={styles.inputText}>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
            <Image
                source={require('../assets/clock.png')}
                style={styles.image2}
                resizeMode="contain"
            />
        </TouchableOpacity>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={async () => {
              await saveTask();
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
            {showDatePicker && (
            <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            />
        )}
        {showTimePicker && (
            <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={onChangeTime}
            />
        )}
      </View>
      {<MenuPopup visible = {isMenuVisible} onClose={() => setMenuVisible(false)}  />}
    </View>
  );
};

export default AddTaskScreen;


