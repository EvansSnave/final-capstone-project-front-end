import { Routes, Route } from 'react-router-dom';
import MyReservations from '../pages/MyReservations';
import Reserve from '../pages/Reserve';
import DoctorsList from '../pages/DoctorsList';

const RoutesApp = ({ id }) => {
  return (
    <Routes>
      <Route path="/" element={<DoctorsList />} />
      <Route path="/myreservations" element={<MyReservations id={id} />} />
      <Route path="/reserve" element={<Reserve />} />
    </Routes>
  );
}

export default RoutesApp;
