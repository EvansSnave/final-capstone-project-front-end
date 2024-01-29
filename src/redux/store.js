import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './slices/doctors/doctorsSlice'

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
  },
});

export default store;
