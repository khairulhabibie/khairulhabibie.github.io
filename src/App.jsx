import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="h-full min-h-screen text-white bg-black max-w-[900px] mx-auto">
      <Navbar />
      <div className="px-5 py-28">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/*" element={<Navigate to="/projects" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/*" element={<Navigate to="/about" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
