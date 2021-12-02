import { configureStore } from '@reduxjs/toolkit';
import { event } from 'react-native-reanimated';
import eventReducer from '../features/events/events';

export default configureStore({ reducer: { eventsList: eventReducer } });
