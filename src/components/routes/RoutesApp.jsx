import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginForm from '../forms/LoginForm';
import MyReservations from '../pages/MyReservations';
import Reserve from '../pages/Reserve';

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/myreservations" element={<MyReservations />} />
    <Route path="/reserve" element={<Reserve />} />
  </Routes>
);

export default RoutesApp;
