import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DatePicker from "@react-native-community/datetimepicker";
import { TimePicker } from "../components/ScrollPicker";

const width= Dimensions.get("window").width 
const height= Dimensions.get("window").height

export const FormScreen = (props) => {
  const [chosenDate, setChosenDate] = useState(new Date());

  const { container } = styles;
  return (
    <View style={container}>
      <View>
        <Text>Add New Event</Text>
        <TextInput style={styles.textBox} placeholder="Event Name"></TextInput>
      </View>
      <View>
        <Text>Date:</Text>
        <DatePicker
          value={chosenDate}
          onChange={setChosenDate}
          style={{ width: Dimensions.get("window").width * 0.8 }}
          mode="date"
          placeholder="Select Date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
        />
      </View>
      <View>
        <Text>How long do you want to work on this?</Text>
       <TimePicker />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height*0.13,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    width: width * 0.9,
    height: height * 0.1,
    borderWidth: 1,
    borderRadius: 30,
  },
});
