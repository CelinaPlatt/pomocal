import { createSlice } from '@reduxjs/toolkit';

export const eventsList = createSlice({
  name: 'events',
  initialState: {
    dates: { },
    tasks: {
      '2021-12-04': [{ title: 'figure out redux', createdAt: Date.now() }],
    },
  },
  reducers: {
    markDate: (state, formattedDate) => {
    //   console.log(state, '<<state', selectedDate, '<<<selectedDate');
      state.dates[formattedDate.payload] = {
        marked: true,
        selectedColor: 'blue',
      };
    },
    addTask: (state, data) => {

      if(!state.tasks[data.payload.selectedDate]){
        state.tasks[data.payload.selectedDate] = []
      }
      // state.tasks[]
      state.tasks[data.payload.selectedDate].push({
        title: data.payload.taskTitle,
        createdAt: Date.now()
      }),
      

      
      console.log(data.payload, '<<<data');
    },
    
  },
});

export const { markDate, addTask } = eventsList.actions;
export default eventsList.reducer;
