import { Routes, Route } from 'react-router-dom';
import Nav from './components/routes/Nav';
import LoginForm from './components/forms/LoginForm';
import IndexDoctors from './components/pages/IndexDoctors';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<IndexDoctors />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
