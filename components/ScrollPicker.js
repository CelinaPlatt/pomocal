import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

import { pomoToMinutes } from "../functions/pomoToMinutes";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const TimePicker = (props) => {
  const {
    selectedHour,
    setSelectedHour,
    selectedMinutes,
    setSelectedMinutes,
    pomodoros,
    setPomodoros,
  } = props;

  const minuteArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  const hourArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const pomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            height: height * 0.17,
            width: "100%",
            // borderWidth: "2px",
            overflow: "hidden"
          }}
        >
          <Picker
            style={{ width: "30%", height: "50%", top: -50 }}
            selectedValue={pomodoros}
            onValueChange={setPomodoros}
          >
            {pomArray.map((pom) => {
              return <Picker.Item label={`${pom}`} value={pom} key={pom} />;
            })}
          </Picker>
          <Text style={{ height: "100%", alignSelf: "center", width: "40%", top: "20%"}}>pomodoros</Text>
          <Text style={{width: "40%", alignSelf: "center", marginLeft: "10%"}}>{(pomoToMinutes(pomodoros))}</Text>

        </View>

        {/* <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <View>
          <Text>Hour(s)</Text>
          <Picker
            style={{ width: "100%" }}
            selectedValue={selectedHour}
            onValueChange={(itemValue) => {
              setSelectedHour(itemValue);
            }}
          >
            {hourArray.map((hour) => {
              return <Picker.Item label={`${hour}`} value={hour} key={hour} />;
            })}
          </Picker>
        </View> */}

        {/* <View>
          <Text>Minutes</Text>
          <Picker
            style={{ width: "100%" }}
            selectedValue={selectedMinutes}
            onValueChange={(itemValue) =>
              setSelectedMinutes(itemValue)
            }
          >
            {minuteArray.map((min) => {
              return <Picker.Item label={`${min}`} value={min} key={min} />;
            })} */}
        {/* <Picker.Item label={"10"} value={10}/>
      <Picker.Item label={"20"} value={20} />
          </Picker>
        </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scroller: {
    width: width * 0.3,
  },
});
