import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import doctorsReducer from './doctors/doctorsSlice'
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    doctors: doctorsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
