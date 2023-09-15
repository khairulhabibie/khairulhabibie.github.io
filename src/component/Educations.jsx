import React from "react";
import { Link } from "react-router-dom";

function Educations() {
  return (
    <section id="educations" className="pt-36 pb-32 bg-slate-800">
      <div className="container w-full mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Educations</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Pernah Belajar
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Pendidikan meliputi pengalaman formal dan non-formal di berbagai
              lembaga. Saya ingin mengucapkan terima kasih kepada semua lembaga
              yang telah memberikan wawasan berharga ini. Setiap langkah telah
              memperkaya pengetahuan saya, dan saya bersemangat untuk menerapkan
              wawasan ini dalam kontribusi saya.
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <Link className="w-1/6 mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1694762034/educations/unpad2_rj7lq7.png"
                alt="unpad"
              />
            </Link>
            <Link className="w-1/6 mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1694752114/educations/aws_rutuln.png"
                alt="aws"
              />
            </Link>
            <Link className="w-1/6 mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1694752120/educations/dicoding_vafmfx.png"
                alt="dicoding"
              />
            </Link>
            <Link className="w-1/6 mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1694762120/educations/freecodecamp2_sp7tfj.png"
                alt="freecodecamp"
              />
            </Link>
            <Link className="w-1/6 mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1694752121/educations/orbit_nap6wt.png"
                alt="orbit"
              />
            </Link>
            <Link className="w-1/6 mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img
                src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1694752160/educations/dqlab_llwxoz.webp"
                alt="dqlab"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Educations;
