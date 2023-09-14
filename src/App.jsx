// import React, { useEffect, useState } from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import ProjectPage from "./pages/ProjectPage";
// import AboutPage from "./pages/AboutPage";
// import Navbar from "./component/Navbar";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import BlogPage from "./pages/BlogPage";
// // import Footer from './component/Footer';

// function App() {
//   const [authed] = useState(true);
//   const { pathname } = useLocation();
//   useEffect(() => {
//     if (pathname === "/") {
//       document.title = "Khairul Habibie";
//     } else {
//       document.title = pathname.slice(1, pathname.length).toUpperCase();
//     }
//   }, [pathname]);

//   if (authed === false) {
//     return (
//       <div className="h-full min-h-screen max-w-[900px] mx-auto">
//         <Navbar authed={authed} />
//         <div className="px-5 py-28">
//           <Routes>
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" exact element={<RegisterPage />} />
//           </Routes>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="h-full min-h-screen max-w-[900px] mx-auto">
//       <Navbar />
//       <div className="px-5 py-28">
//         <Routes>
//           <Route path="/" exact element={<HomePage />} />
//           <Route path="/*" element={<Navigate to="/" />} />
//           <Route path="/project" element={<ProjectPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/blog" element={<BlogPage />} />
//         </Routes>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
