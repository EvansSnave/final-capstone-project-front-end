import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const currentUser = createAsyncThunk('users/currentuser', async () => {
  const response = axios.get('http://localhost:4000/current_user', {
    
  });
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase()
  },
});

export default usersSlice.reducer;
