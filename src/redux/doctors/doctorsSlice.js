import { createSlice } from '@reduxjs/toolkit';
import listOfDoctors from './actions/listOfDoctors';
import createDoctors from './actions/createDoctors';
import deleteDoctors from './actions/deleteDoctors';

const initialState = {
  doctorsList: [],
  message: 'ok',
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listOfDoctors.fulfilled, (state, action) => {
        state.doctorsList = action.payload;
      })
      .addCase(createDoctors.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(deleteDoctors.fulfilled, (state, action) => {
        state.message = action.payload.message;
      });
  },
});

export default doctorsSlice.reducer;
