import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const registerUser = createAsyncThunk('users/registerUser',
  async (data) => {
    const body = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    };
    const response = await axios.post('http://localhost:4000/signup', body);
    return {
      data: response.data,
      status: response.status,
      headers: response.headers,
    };
  });

export default registerUser;
