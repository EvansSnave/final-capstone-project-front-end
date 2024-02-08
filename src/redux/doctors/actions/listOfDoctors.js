import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const listOfDoctors = createAsyncThunk('doctors/listOfDoctors', async () => {
  const response = await axios.get('http://localhost:4000/doctors');
  return response.data.map((doctor) => ({
    id: doctor.id,
    cityId: doctor.city_id,
    userId: doctor.user_id,
    name: doctor.name,
    description: doctor.description,
    imageUrl: doctor.image_url,
    age: doctor.age,
  }));
});

export default listOfDoctors;
