import React from 'react';
import { View, Text, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useSelector, useDispatch } from 'react-redux';
import { markDate, addTask } from './events';
import { useState, useEffect } from 'react';
import TaskForm from '../../components/TaskForm';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';

export default function EventList(props) {

  const {navigation} = props
  const events = useSelector((state) => {
    return state.eventsList.dates;
  });

  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(() => {
    const todaysDate = moment().format('YYYY-MM-DD');
    return todaysDate;
  });
  const [formVisible, setFormVisible] = useState(false);
  const tasks = useSelector((state) => {
    return state.eventsList.tasks;
  });

  const renderItem = ({ item }) => {
    return <Text>- {item.title}</Text>;
  };

  const [taskTitle, setTaskTitle] = useState('');


  // console.log(tasks, 'tasks');

  // console.log(selectedDate, '<<<selected date');
  // console.log(events, '<<events');
  console.log({...events, [selectedDate] : {selected: true, selectedColor: "orange"}})
  return (
    <View>
      <Calendar
      // the marked dates here use the stored events, spread and then added the current selected day to save having to constantly updated the store
        markedDates={{...events, [selectedDate] : {selected: true, selectedColor: "lightblue"}}}
        current={selectedDate}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          
        }}
      />
      
      <Button
        title="Add task"
        onPress={() => {
          dispatch(markDate(selectedDate))
          dispatch(addTask({ selectedDate, taskTitle }));
          setTaskTitle('')
        }}
      ></Button>
      <Button title="+" onPress={()=>(navigation.navigate("FormScreen"))}/>
      <TaskForm taskTitle={taskTitle} setTaskTitle={setTaskTitle} />

      <FlatList
        keyExtractor={(item) => item.createdAt}
        data={tasks[selectedDate]}
        renderItem={renderItem}
      />
    </View>
  );
}
