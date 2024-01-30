import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './slices/doctors/doctorsSlice';
import reservationsReducer from './slices/reservations/reservationsSlice';
import usersReducer from './slices/users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    doctors: doctorsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
