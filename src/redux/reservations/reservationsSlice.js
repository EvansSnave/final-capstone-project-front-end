import { createSlice } from '@reduxjs/toolkit';
import listOfReservations from './actions/indexReservations';

const initialState = {
  list: [],
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listOfReservations.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export default reservationsSlice.reducer;
