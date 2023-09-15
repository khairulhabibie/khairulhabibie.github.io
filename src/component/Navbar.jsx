import React, { useState } from "react";

function Navbar() {
  const [navpos, setNavpos] = useState("absolute");
  const [navline, setNavline] = useState("");
  const [navlist, setNavlist] = useState("hidden");

  function hamburgermenu() {
    if (navline === "" && navlist !== "") {
      setNavline("hamburger-active");
      setNavlist("");
    } else {
      setNavline("");
      setNavlist("hidden");
    }
  }

  window.onscroll = function () {
    if (window.scrollY > 0) {
      setNavpos("navbar-fixed");
    } else {
      setNavpos("absolute");
    }
  };

  return (
    <>
      <header
        className={`top-0 left-0 w-full flex items-center z-10 ${navpos}`}
      >
        <div className="container  w-full mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home" className="font-bold text-lg  block py-6">
                khairulhabibie
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                className={`block absolute right-4 lg:hidden ${navline}`}
                onClick={hamburgermenu}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav
                className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${navlist}`}
              >
                <ul className="block lg:flex ">
                  <li className="group">
                    <a
                      href="/#hero"
                      className="text-base text-black py-2 mx-8 flex group-hover:text-red-700"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="/#about"
                      className="text-base text-black py-2 mx-8 flex group-hover:text-red-700"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="/#portofolio"
                      className="text-base text-black py-2 mx-8 flex group-hover:text-red-700"
                    >
                      Portofolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="/#educations"
                      className="text-base text-black py-2 mx-8 flex group-hover:text-red-700"
                    >
                      Educations
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="/#blog"
                      className="text-base text-black py-2 mx-8 flex group-hover:text-red-700"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="/#contact"
                      className="text-base text-black py-2 mx-8 flex group-hover:text-red-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
