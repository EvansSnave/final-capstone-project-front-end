import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createDoctors = createAsyncThunk('doctors/createDoctors', async (data) => {
  const formData = new FormData();
  formData.append('doctor[name]', data.name);
  formData.append('doctor[age]', data.age);
  formData.append('doctor[city_id]', data.cityId);
  formData.append('doctor[user_id]', data.userId);
  formData.append('doctor[description]', data.description);
  formData.append('doctor[avatar]', data.avatar[0], data.avatar.value);
  formData.append('doctor[image_url]', data.imageUrl[0]);
  formData.append('doctor[detail_attributes][price]', data.price);
  formData.append('doctor[detail_attributes][specialization]', data.specialization);
  formData.append('doctor[detail_attributes][studies]', data.studies);

  const response = await axios.post('http://localhost:4000/doctors', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return response.data;
});

export default createDoctors;
