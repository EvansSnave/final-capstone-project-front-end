import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createReservations = createAsyncThunk('reservations/createReservations',
  async ({ data, id }) => {
    const body = {
      reservation: {
        user_id: id,
        doctor_id: data.doctorId,
        schedule_date: data.scheduleDate,
        city_id: data.cityId,
      },
    };
    const response = await axios.post('http://localhost:4000/reservations', body);
    return response.data;
  });

export default createReservations;
