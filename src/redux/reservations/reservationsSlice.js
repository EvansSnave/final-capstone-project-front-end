import { createSlice } from '@reduxjs/toolkit';
import listOfReservations from './actions/indexReservations';
import createReservations from './actions/createReservations';
import deleteReservations from './actions/deleteReservations';

const initialState = {
  list: [],
  status: 'ok',
  message: null,
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
      })
      .addCase(deleteReservations.fulfilled, (state, action) => {
        state.list = state.list.filter((reservation) => reservation.id !== action.meta.arg);
        state.message = action.payload.message;
      });
  },
});

export default reservationsSlice.reducer;
