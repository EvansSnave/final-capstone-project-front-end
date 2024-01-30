import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUsers = createAsyncThunk('users/loginUsers',
  async (data) => {
    const body = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    };
    const response = await axios.post('http://localhost:4000/login', body);
    return {
      data: response.data,
      status: response.status,
      headers: response.headers,
    };
  });

export default loginUsers;
