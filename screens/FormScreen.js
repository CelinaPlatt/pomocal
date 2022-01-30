import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DatePicker from "@react-native-community/datetimepicker";
import { TimePicker } from "../components/ScrollPicker";
import { SaveButton } from "../components/SaveButton";
import { Button } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const FormScreen = (props) => {
  const [chosenDate, setChosenDate] = useState(new Date());
  const [selectedMinutes, setSelectedMinutes] = useState(5);
  const [selectedHour, setSelectedHour] = useState(0);

  const [pomodoros, setPomodoros] = useState(1);
  const { navigation } = props;

  // <<<<<< Trying to put add task button in the header right but we need it in here to be able to access the values

  const { container } = styles;
  return (
    <View style={container}>
      <View>
        <TextInput style={styles.textBox} placeholder="Title"></TextInput>
      </View>
      <View>
        <Text>Date:</Text>
        <DatePicker
          value={chosenDate}
          onChange={setChosenDate}
          style={{ width: width * 0.8 }}
          mode="date"
          placeholder="Select Date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text>How long do you want to work on this?</Text>
        <TimePicker
          style={{ width: width }}
          selectedMinutes={selectedMinutes}
          setSelectedMinutes={setSelectedMinutes}
          selectedHour={selectedHour}
          setSelectedHour={setSelectedHour}
          pomodoros={pomodoros}
          setPomodoros={setPomodoros}
        />
      </View>
      <SaveButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: height*0.13,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  textBox: {
    width: width,
    height: height * 0.07,
    borderWidth: 1,
    borderColor: "#D5D9DB",
    paddingLeft: "9%",
    fontSize: 18,
  },
});
