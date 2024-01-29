import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDoctors = createAsyncThunk(
  'doctors/fetchDoctors', async () => {
    const response = await axios.get('http://localhost:4000/doctors');
    return response.data.map((doctor) => ({
      doctorId: doctor.id,
      cityId: doctor.city_id,
      userId: doctor.user_id,
      name: doctor.name,
      description: doctor.description,
      imageUrl: doctor.image_url,
      age: doctor.age,
    }));
  },
);

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default doctorsSlice.reducer;
