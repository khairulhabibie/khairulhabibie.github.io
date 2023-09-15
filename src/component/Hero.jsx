import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="home" className="pt-36">
      <div className="container w-full mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl ">
              Helo Semua 👋,
              <span className="block font-bold text-dark text-4xl lg:text-4xl">
                saya Khairul Habibie
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              React <span className="text-dark">Developer</span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
              Pengembang React menciptakan antarmuka digital yang menarik dengan
              kreativitas dan
              <span className="text-dark font-bold"> fokus pada pengguna!</span>
            </p>
            <Link
              to="#"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transisition duration-300 ease-in-out"
            >
              Hubungi Saya
            </Link>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297503/portofolio.khairulhabibie.my.id/khairulhabibie_lyxqwr.webp"
                alt="khairulhabibie.webp"
                className="max-w-full mx-auto"
              />
              <span className="absolute -top-16 -z-10 left-1/2 -translate-x-1/2">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14b8a6"
                    d="M39.2,-44.8C51.7,-36.2,63.6,-24.7,64.6,-12.3C65.6,0,55.9,13.3,48.9,30.9C41.9,48.4,37.7,70.1,26.7,74.8C15.7,79.4,-2.1,67,-16.8,57C-31.4,46.9,-42.9,39.2,-49.9,28.2C-57,17.3,-59.5,3.2,-56.2,-8.9C-52.9,-21,-43.7,-31,-33.3,-40.1C-23,-49.1,-11.5,-57,0.9,-58.1C13.3,-59.2,26.6,-53.4,39.2,-44.8Z"
                    transform="translate(100 100) scale(0.8)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
