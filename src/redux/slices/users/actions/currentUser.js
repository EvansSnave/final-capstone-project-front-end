import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const currentUser = createAsyncThunk('users/currentUser',
  async (token) => {
    const response = await axios.get('http://localhost:4000/current_user', {
      headers: {
        Authorization: token,
      },
    });
    console.log(response)
    return {
      data: response.data,
      status: response.status,
    };
  });

export default currentUser;