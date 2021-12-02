import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import store from './app/store';
import { Provider } from 'react-redux';
import EventList from './features/events/EventList';

export default function App(props) {


  return (
    <Provider store={store}>
    <View style={styles.container}>
     <EventList/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
