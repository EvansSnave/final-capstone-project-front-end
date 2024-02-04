import { Routes, Route } from 'react-router-dom';
import MyReservations from '../pages/MyReservations';
import DoctorsList from '../pages/DoctorsList';
import CreateReservations from '../forms/CreateReservations';
import CreateDoctors from '../forms/CreateDoctor';
import DeleteDoctors from '../forms/DeleteDoctor';
import Details from '../pages/Details';

const RoutesApp = ({ id }) => (
  <Routes>
    <Route path="/" element={<DoctorsList />} />
    <Route path="/myreservations" element={<MyReservations id={id} />} />
    <Route path="/reserve" element={<CreateReservations id={id} />} />
    <Route path="/createdoctors" element={<CreateDoctors />} />
    <Route path="/deletedoctor" element={<DeleteDoctors />} />
    <Route path="/:id" element={<Details />} />
  </Routes>
);

export default RoutesApp;
