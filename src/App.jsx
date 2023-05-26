import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
import NoteApp from './container/ProjectDetail/NoteApp';
import ProjectNoTFound from './container/ProjectDetail/ProjectNoTFound';
import LibraryPage from './pages/LibraryPage';
import AboutPage from './pages/AboutPage';
import MessagePage from './pages/MessagePage';

function App() {
  return (
    <div className="text-white bg-black">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/note-app" element={<NoteApp />} />
        <Route path="/projects/404" element={<ProjectNoTFound />} />
        <Route path="/projects/*" element={<Navigate to="/projects/404" />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </div>
  );
}

export default App;
