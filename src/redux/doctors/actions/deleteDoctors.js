import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const deleteDoctors = createAsyncThunk('doctors/deleteDoctors', async ({ id }) => {
  const response = await axios.delete(`http://localhost:4000/doctors/${id}`);
  return response.data;
});

export default deleteDoctors;
