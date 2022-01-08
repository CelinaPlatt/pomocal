// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import store from './app/store';
import { Provider } from 'react-redux';
import EventList from './features/events/EventList';
import { FormScreen } from './screens/FormScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator()

export default function App(props) {


  return (
    <Provider store={store}>
    
      <NavigationContainer>
      <Stack.Navigator>

     <Stack.Screen name="EventList" component={EventList}/>
     <Stack.Screen name="FormScreen" component={FormScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Dimensions.get("window").height*0.1,
  },
});
