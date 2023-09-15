import React from "react";
import { Link } from "react-router-dom";

function Clients() {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-800">
      <div className="container w-full mx-auto">
        <div className="w-full px-4">
          <div className=" mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Yang Pernah Bekerjasama
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos optio nulla impedit excepturi, repudiandae minima
              nesciunt temporibus dolorum fuga officia.
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <Link className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1694744092/clients/google_nrd3qd.png"
                alt="google"
              />
            </Link>
            <Link className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1694743563/clients/gojek_e9heeh.png"
                alt="gojek"
              />
            </Link>
            <Link className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1694743563/clients/tokopedia_svwklf.png"
                alt="tokopedia"
              />
            </Link>
            <Link className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1694744365/clients/amazon_ns5oai.svg"
                alt="traveloka"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
