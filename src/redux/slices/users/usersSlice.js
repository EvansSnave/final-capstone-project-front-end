import { createSlice } from '@reduxjs/toolkit';
import registerUser from './actions/registerUsers';
import loginUsers from './actions/loginUsers';
import logoutUsers from './actions/logoutUsers';

const initialState = {
  status: 'idle',
  error: null,
  info: {},
  token: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state) => {
        state.status = 'Success';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'Rejected';
        state.error = action.error.message;
      })
      .addCase(loginUsers.fulfilled, (state, action) => {
        state.status = action.payload.data.status;
        state.info = action.payload.data.data;
        state.token = action.payload.auth;
      })
      .addCase(logoutUsers.fulfilled, (state, action) => {
        state.status = action.payload.data.status;
      });
  },
});

export default usersSlice.reducer;
