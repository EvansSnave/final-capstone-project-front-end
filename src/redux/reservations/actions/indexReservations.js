import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const listOfReservations = createAsyncThunk('reservations/listOfreservations',
  async (id) => {
    const response = await axios.get(`http://localhost:4000/reservations?id=${id}`);
    return response.data.map((reservation) => ({
      id: reservation.id,
      userId: reservation.user_id,
      doctorId: reservation.doctor_id,
      scheduleDate: reservation.schedule_date,
    }));
  });

export default listOfReservations;
