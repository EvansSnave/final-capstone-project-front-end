import { Routes, Route } from 'react-router-dom';
import MyReservations from '../pages/MyReservations';
import DoctorsList from '../pages/DoctorsList';
import CreateReservations from '../forms/CreateReservations';

const RoutesApp = ({ id }) => {
  return (
    <Routes>
      <Route path="/" element={<DoctorsList />} />
      <Route path="/myreservations" element={<MyReservations id={id} />} />
      <Route path="/reserve" element={<CreateReservations id={id} />} />
    </Routes>
  );
}

export default RoutesApp;
