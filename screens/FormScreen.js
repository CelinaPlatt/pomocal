import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { DateTimeScroller } from '../components/DateTimeScroller'


export const FormScreen = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <Text>Add New Event</Text>
    <TextInput style={styles.textBox} placeholder='Event Name'></TextInput>
  <DateTimeScroller />
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  textBox : {
      
      width: Dimensions.get("window").width * 0.9,
      height: Dimensions.get("window").height * 0.1,
      borderWidth: 1,
      borderRadius: 30
  }
})