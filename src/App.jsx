import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import Navbar from './container/Navbar';
import Footer from './container/Footer';

function App() {
  return (
    <div className="text-white bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/*" element={<Navigate to="/projects" />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/*" element={<Navigate to="/about" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
