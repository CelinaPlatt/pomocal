import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function TaskForm({ taskTitle, setTaskTitle }) {
  return (
    <View>
      <TextInput
        value={taskTitle}
        onChangeText={(newTitle) => {
          console.log(newTitle, '<<newTitle');
          setTaskTitle(newTitle);
        }}
        style={{ height: 40, borderWidth: 1 }}
      />
    </View>
  );
}
