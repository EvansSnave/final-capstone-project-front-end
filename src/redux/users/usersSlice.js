import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const currentUser = createAsyncThunk('users/currentUser', async () => {
  const token = localStorage.getItem('tokenAuth');
  const response = await axios.get('http://localhost:4000/current_user', {
    headers: {
      Authorization: token,
    },
  });
  return {
    user: {
      id: response.data.id,
      authorized: true,
    },
  };
});

export const signupUser = createAsyncThunk('users/signupUser', async (data) => {
  const body = {
    user: {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    }
  };
  console.log(body)
  const response = await axios.post('http://localhost:4000/signup', body);
  return response.data;
});

export const loginUser = createAsyncThunk('users/loginUser', async (data) => {
  const body = {
    user: {
      name: data.name,
      email: data.email,
      password: data.password,
      authorized: true,
    },
  };
  const response = await axios.post('http://localhost:4000/login', body);
  localStorage.setItem('tokenAuth', response.headers.authorization);
  window.location.reload();
  return {
    user: {
      id: response.data.id,
      authentication: response.headers.authorization,
    },
  };
});

export const logoutUser = createAsyncThunk('users/logoutUsers', async () => {
  const token = localStorage.getItem('tokenAuth');
  const response = await axios.delete('http://localhost:4000/logout', {
    headers: {
      Authorization: token,
    },
  });
  localStorage.removeItem('tokenAuth');
  window.location.reload();
  return response.data;
});

const initialState = {
  info: null,
  id: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(currentUser.fulfilled, (state, action) => {
        state.info = action.payload.user.authorized;
        state.id = action.payload.user.id;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.info = action.payload;
      });
  },
});

export default usersSlice.reducer;
