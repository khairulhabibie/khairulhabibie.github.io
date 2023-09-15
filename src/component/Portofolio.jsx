import React from "react";

function Portofolio() {
  return (
    <section id="portofolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Portofolio</h4>
            <h2 className="font-bold text-dark text-3xl mb-4">
              Projek Terbaru
            </h2>
            <p className="font-medium text-md text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos optio nulla impedit excepturi, repudiandae minima
              nesciunt temporibus dolorum fuga officia.
            </p>
          </div>
        </div>
        {/* <div className="w-full px-4 flex flex-wrap justify-center">
          <div className="mb-12 p-4">
            <div className="rounded-md shadow-md overflow-hidden">
              <div className="w-full bg-red-600"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Portofolio;
