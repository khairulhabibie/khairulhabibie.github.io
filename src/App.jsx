import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./component/Navbar";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      document.title = "Khairul Habibie";
    } else {
      document.title = pathname.slice(1, pathname.length).toUpperCase();
    }
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/pertanian/perencanaan" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
