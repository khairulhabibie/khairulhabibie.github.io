import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import Navbar from './component/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BlogPage from './pages/BlogPage';
import RanahPage from './pages/RanahPage';
import TreePage from './pages/TreePage';
// import Footer from './component/Footer';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/') {
      document.title = 'Profile | Khairul Habibie';
    } else {
      document.title = pathname.toUpperCase();
    }
  }, [pathname]);

  return (
    <div className="h-full min-h-screen max-w-[900px] mx-auto">
      <Navbar pathname={pathname} />
      <div className="px-5 py-28">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/ranah" element={<RanahPage />} />
          <Route path="/tree" element={<TreePage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
