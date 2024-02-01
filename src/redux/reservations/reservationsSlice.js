import { createSlice } from '@reduxjs/toolkit';
import listOfReservations from './actions/indexReservations';
import createReservations from './actions/createReservations';

const initialState = {
  list: [],
  status: 'ok',
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listOfReservations.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(createReservations.fulfilled, (state, action) => {
        state.status = action.payload.message;
      });
  },
});

export default reservationsSlice.reducer;
