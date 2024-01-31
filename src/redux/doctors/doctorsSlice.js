import { createSlice } from '@reduxjs/toolkit';
import listOfDoctors from './actions/listOfDoctors';

const initialState = {
  doctorsList: [],
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder
      .addCase(listOfDoctors.fulfilled, (state, action) => {
        state.doctorsList = action.payload;
      });
  },
});

export default doctorsSlice.reducer;
