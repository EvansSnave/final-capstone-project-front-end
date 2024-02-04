import { createSlice } from '@reduxjs/toolkit';
import listOfDoctors from './actions/listOfDoctors';
import createDoctors from './actions/createDoctors';
import deleteDoctors from './actions/deleteDoctors';
import detailsDoctors from './actions/detailsDoctors';

const initialState = {
  doctorsList: [],
  message: 'ok',
  details: {},
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
      })
      .addCase(detailsDoctors.fulfilled, (state, action) => {
        state.details = action.payload;
      });
  },
});

export default doctorsSlice.reducer;
