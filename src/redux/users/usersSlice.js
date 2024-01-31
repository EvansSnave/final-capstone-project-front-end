import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const currentUser = createAsyncThunk('users/currentUser', async (token) => {
  const response = await axios.get('http://localhost:4000/current_user', {
    headers: {
      Authorization: token,
    },
  });
  return {
    user: {
      id: response.id,
      authorized: true,
    }
  }
});

export const loginUser = createAsyncThunk('users/loginUser', async () => {
  const response = await axios.post('http://localhost:4000/login');
});

const initialState = {
  info: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(currentUser.fulfilled, (state, action) => {
      state.info = action.payload
    })
  },
});

export default usersSlice.reducer;
