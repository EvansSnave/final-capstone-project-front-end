import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReservations = createAsyncThunk(
  'reservationsindex/fetchreservations', async () => {
    const response = await axios.get('http://localhost:4000/reservations');
    return response.data.map((reservation) => ({
      id: reservation.id,
      userId: reservation.user_id,
      doctorId: reservation.doctor_id,
      scheduleDate: reservation.schedule_date
    }));
  },
);

const reservationsSlice = createSlice({
  name: 'reservationsIndex',
  initialState: { reservationsList: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.reservationsList = action.payload;
    });
  },
});

export default reservationsSlice.reducer;
