import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Speciality from './pages/Speciality';
import Survey from './pages/Survey';
import Occupation from './pages/Occupation';
import Assessment from './pages/Assessment';
import Login from './pages/Login';
import Register from './pages/Register';
import Resume from './pages/Resume';
import AIChat from './pages/AIChat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speciality" element={<Speciality />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/occupation" element={<Occupation />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/aichat" element={<AIChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
