import { createSlice } from '@reduxjs/toolkit';
import registerUser from './actions/registerUsers';
import loginUsers from './actions/loginUsers';

const initialState = {
  status: 'idle',
  error: null,
  info: {},
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
        // payload.headers.authorization
      });
  },
});

export default usersSlice.reducer;
