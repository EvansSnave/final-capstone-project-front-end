import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const deleteReservations = createAsyncThunk('reservations/deleteReservations',
  async (id) => {
    const response = await axios.delete(`http://localhost:4000/reservations/${id}`);
    return response.data;
  });

export default deleteReservations;
