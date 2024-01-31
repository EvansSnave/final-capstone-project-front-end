import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginForm from '../forms/LoginForm';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
};

export default RoutesApp;
