import { SiTailwindcss, SiJavascript } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';

function AboutPage() {
  const img_url =
    'https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297503/portofolio.khairulhabibie.my.id/khairulhabibie_lyxqwr.webp';
  return (
    <>
      <section className="mb-5 text-2xl font-bold">
        <h1 className="mb-1 text-3xl font-bold">ABOUT ME</h1>
      </section>
      <div className="flex">
        <div>
          <div className="container">
            <figure className="float-right">
              <img
                className="hidden sm:block"
                width="200px"
                src={img_url}
                alt="khairul-habibie.webp"
              />
            </figure>
            <article className="space-y-4 text-gray-300 md:text-justify">
              <p>
                Hello! I am Khairul. I started learning web development in
                Januari 2022. I have nothing much to do so I decided to learn
                web development from a dicoding course, then started watching a
                bunch of youtube videos to explore more about web development
                especially frontend development.
              </p>
              <p>
                There are a lot of things and technologies to learn in frontend
                development and I am motivated to learn as much as possible. I
                enjoy learning something new and getting feedback to make myself
                better and improve.
              </p>
              <p>
                In this website I will be writing some blogs and showcase my
                projects. I believe that writing what I have learned is the best
                way to remember things, and I can share my knowledge along the
                way. So do contact me and I will be very happy to help!
              </p>
            </article>
          </div>
          <div className="space-y-4 my-7">
            <h1 className="text-2xl font-bold">Current Favorite Tech Stack</h1>
            <ul className="flex space-x-3 text-4xl ">
              <li className="hover:text-blue-500 hover:bg-white">
                <FaReact />
              </li>
              <li className="hover:text-yellow-500 hover:bg-white">
                <SiJavascript />
              </li>
              <li>
                <SiTailwindcss className="hover:text-blue-500 hover:bg-white" />
              </li>
              <li>
                <FaNodeJs className="hover:text-green-700 hover:bg-white" />
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Contact</h1>
            <div className="text-gray-300">
              <p>
                Do contact me if you need my opinion about web development,
                especially frontend works. I will be happy to help! (find my
                email in the footer)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
