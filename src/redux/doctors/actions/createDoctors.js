import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createDoctors = createAsyncThunk('doctors/createDoctors', async (data) => {
  const body = {
    doctor: {
      name: data.name,
      age: data.age,
      city_id: data.cityId,
      user_id: data.userId,
      description: data.description,
      image_url: data.imageUrl,
      detail_attributes: {
        price: data.price,
        specialization: data.specialization,
        studies: data.studies,
      },
    },
  };
  const response = await axios.post('http://localhost:4000/doctors', body);
  return response.data;
});

export default createDoctors;
