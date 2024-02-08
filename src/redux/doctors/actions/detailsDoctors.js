import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const detailsDoctors = createAsyncThunk('doctors/detailsDoctors', async (id) => {
  const response = await axios.get(`http://localhost:4000/details/${id}`);
  const detail = response.data;
  return {
    id: detail.id,
    price: detail.price,
    specialization: detail.specialization,
    studies: detail.studies,
  };
});

export default detailsDoctors;
