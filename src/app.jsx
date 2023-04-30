import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import BlogPage from "./Pages/BlogPage";
import ProjectPage from "./Pages/ProjectPage";
import NoteApp from "./Container/Project/NoteApp";
import ProjectNoTFound from "./Container/Project/ProjectNoTFound";
import LibraryPage from "./Pages/LibraryPage";
import AboutPage from "./Pages/AboutPage";

const app = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/404" element={<PageNotFound />}></Route>
      <Route path="/*" element={<PageNotFound />}></Route>
      {/* <Route path="*" element={<Navigate to="/404" />}></Route> */}
      <Route path="/blog" element={<BlogPage />}></Route>
      <Route path="/projects" element={<ProjectPage />}></Route>
      <Route path="/projects/note-app" element={<NoteApp />}></Route>
      <Route path="/projects/404" element={<ProjectNoTFound />}></Route>
      <Route path="/projects/*" element={<ProjectNoTFound />}></Route>
      <Route path="/library" element={<LibraryPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
  );
};

export default app;
