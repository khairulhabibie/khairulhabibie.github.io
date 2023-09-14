import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="home" className="pt-36">
      <div className="container w-full mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4">
            <h1 className="text-base font-semibold text-primary">
              Helo Semua 👋,
              <span className="block font-bold text-dark text-4xl">
                saya Khairul Habibie
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5">
              React & <span className="text-dark">Javascript Developer</span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
              Belajar web programming itu mudah dan menyenangkan bukan.{" "}
              <span className="text-dark font-bold">bukan!</span>
            </p>
            <Link
              to="#"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transisition duration-300 ease-in-out"
            >
              Hubungi Saya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
