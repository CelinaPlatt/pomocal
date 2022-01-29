import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const TimePicker = (props) => {
  const [selectedMinutes, setSelectedMinutes] = useState(5);
  const [selectedHour, setSelectedHour] = useState(0);


  const minuteArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  const hourArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (<>
  <View><Text>Hour</Text></View>


  <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
<View>
  <Text>Hour(s)</Text>
<Picker
    style={{width: "100%"}}
    selectedValue={selectedHour}
    onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}
  >
  
    {hourArray.map((hour)=>{ 
      return  <Picker.Item label={`${hour}`} value={hour} key={hour}/>
    })}
    
  </Picker> 
  </View>

  <View>
    <Text>Minutes</Text>
    <Picker
    style={{width: "100%"}}
      selectedValue={selectedMinutes}
      onValueChange={(itemValue, itemIndex) => setSelectedMinutes(itemValue)}
    >
    
      {minuteArray.map((min)=>{ 
        return  <Picker.Item label={`${min}`} value={min} key={min}/>
      })}
      {/* <Picker.Item label={"10"} value={10}/>
      <Picker.Item label={"20"} value={20} /> */}
     
    </Picker>
    </View>

    
  </View>
  </>
  );
};

const styles = StyleSheet.create({
  scroller: {
    width: width * 0.3,
  },
});
