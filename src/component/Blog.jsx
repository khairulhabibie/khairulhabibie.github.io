import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100">
      <div className="container w-full mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Blog</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Tulisan Terkini
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium molestias magni fugiat, consequatur accusamus
              consectetur iste libero? Earum, quo sit.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="https://source.unsplash.com/350x200?mechanical+keyboard"
                alt="keyboard"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <Link className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                    Tips Belajar Programming dengan mudah, dijamin bisa!
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, modi!
                </p>
                <Link className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="https://source.unsplash.com/350x200?programming"
                alt="programming"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <Link className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                    Review Keyboard GMMK Programming
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  ex iure quisquam illum!
                </p>
                <Link className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="https://source.unsplash.com/350x200?nuclear"
                alt="nuclear"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <Link className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                    Apakah PLTN Berbahaya ?
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, repudiandae eius? Nisi, vitae tempore. Placeat?
                </p>
                <Link className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
