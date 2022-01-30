import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Dimensions } from 'react-native'
import style from 'react-native-datepicker/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

/**
* @author
* @function SaveButton
**/
export const SaveButton = (props) => {

const { container } = styles

 return(<View style={styles.view}>

<TouchableOpacity style={styles.button} title="Cancel" onPress={()=>{
        console.log("Cancelled")
    }}><Text style={styles.buttonText}>Cancel</Text>
    </TouchableOpacity>
        

<TouchableOpacity style={styles.button} title="Save" onPress={()=>{
        console.log("Saved")
    }}><Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>

</View>
  
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  view :{
      width: width,
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-evenly",
      alignItems: "flex-end",
      padding: 20

  },
  button: {
      backgroundColor: "#DDD"
  },
  buttonText: {
      fontSize: 24
  }
})