import { createSlice } from '@reduxjs/toolkit';

export const eventsList = createSlice({
  name: 'events',
  initialState: {
    dates: { '2021-12-04': { marked: true, selectedColor: 'blue' } },
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
      // state.tasks[]
      console.log(data.payload, '<<<data');
    },
  },
});

export const { markDate, addTask } = eventsList.actions;
export default eventsList.reducer;
