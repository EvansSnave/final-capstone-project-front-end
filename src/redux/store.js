import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './slices/doctors/doctorsSlice';
import reservationsReducer from './slices/reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    reservations: reservationsReducer
  },
});

export default store;
