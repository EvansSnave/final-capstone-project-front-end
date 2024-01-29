import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginForm from '../forms/LoginForm';
import IndexDoctors from '../pages/IndexDoctors';

const Nav = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/doctors" element={<IndexDoctors />} />
  </Routes>
);

export default Nav;
