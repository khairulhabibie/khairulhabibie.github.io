import React from "react";

function Portofolio() {
  return (
    <section id="portofolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container w-full mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Portofolio</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Projek Terbaru
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              "Tiba di bagian paling kreatif! Di sini, Anda akan menemukan
              koleksi projek yang mencakup landing page yang memukau dan
              aplikasi dinamis yang dibuat dengan keahlian menggunakan ReactJS.
              Sambut inovasi dalam desain dan pengembangan!"
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <a href="https://bookshelf-v1.netlify.app/">
              <div className="rounded-md shadow-md overflow-hidden md:max-h-[400px] max-h-[300px]">
                <img
                  src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1695267971/projects/bookshelf-v1.webp"
                  alt="bookshelf-v1"
                  className="w-full"
                  target="_blank"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Khairul Habibie Landingpage
              </h3>
            </a>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              sit soluta nam doloremque cupiditate dolores!
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <a href="https://note-app-with-react-v11.netlify.app/">
              <div className="rounded-md shadow-md overflow-hidden md:max-h-[400px] max-h-[300px]">
                <img
                  src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1695267971/projects/note-app-with-react-v12.webp"
                  alt="kedaikopi.webp"
                  className="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Khairul Habibie Landingpage
              </h3>
            </a>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              sit soluta nam doloremque cupiditate dolores!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
