import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const logoutUsers = createAsyncThunk('users/logoutUsers',
  async (token) => {
    const response = await axios.delete('http://localhost:4000/logout', {
      headers: {
        Authorization: token,
      },
    });
    return {
      data: response.data,
      status: response.status,
    };
  });

export default logoutUsers;
