import { Routes, Route } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import IndexDoctors from '../pages/IndexDoctors';
import RegisterForm from '../forms/RegisterForm';

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<IndexDoctors />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<RegisterForm />} />
  </Routes>
);

export default RoutesApp;
