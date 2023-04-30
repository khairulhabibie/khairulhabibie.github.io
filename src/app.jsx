import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import BlogPage from "./Pages/BlogPage";
import ProjectPage from "./Pages/ProjectPage";
import LibraryPage from "./Pages/LibraryPage";
import AboutPage from "./Pages/AboutPage";

const app = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />}></Route>
      <Route path="/404" element={<PageNotFound />}></Route>
      <Route path="*" element={<Navigate to="/404" />}></Route>
      <Route path="/blog" exact element={<BlogPage />}></Route>
      <Route path="/project" exact element={<ProjectPage />}></Route>
      <Route path="/library" exact element={<LibraryPage />}></Route>
      <Route path="/about" exact element={<AboutPage />}></Route>
    </Routes>
  );
};

export default app;
