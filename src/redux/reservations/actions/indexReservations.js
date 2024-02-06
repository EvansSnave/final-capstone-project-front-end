import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import listOfDoctors from '../../doctors/actions/listOfDoctors';

const findDoctorById = (doctors, doctorId) => {
  return doctors.find((doctor) => doctor.id === doctorId);
};

const listOfReservations = createAsyncThunk('reservations/listOfReservations', async (id, { dispatch, getState }) => {

  await dispatch(listOfDoctors());

  const state = getState();
  const doctors = state.doctors.doctorsList;

  const response = await axios.get(`http://localhost:4000/reservations?id=${id}`);
  const reservations = response.data.map((reservation) => {
    const doctor = findDoctorById(doctors, reservation.doctor_id);
    return {
      id: reservation.id,
      userId: reservation.user_id,
      doctorId: reservation.doctor_id,
      scheduleDate: reservation.schedule_date,
      doctorImage: `http://localhost:4000${doctor.imageUrl}`,
      cityId: reservation.city_id
    };
  });

  return reservations;
});

export default listOfReservations;