import { Routes, Route } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import Home from '../pages/Home';

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<RegisterForm />} />
  </Routes>
);

export default RoutesApp;
