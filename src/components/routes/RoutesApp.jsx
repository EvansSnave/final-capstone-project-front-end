import { Routes, Route } from 'react-router-dom';
import MyReservations from '../pages/MyReservations';
import Reserve from '../pages/Reserve';
import DoctorsList from '../pages/DoctorsList';

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<DoctorsList />} />
    <Route path="/myreservations" element={<MyReservations />} />
    <Route path="/reserve" element={<Reserve />} />
  </Routes>
);

export default RoutesApp;
