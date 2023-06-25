import { SiTailwindcss, SiJavascript } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { aboutText } from '../utils/translate/about-text';

function About() {
  return (
    <section className="mx-4 mt-28 md:mx-24">
      <div className="mb-5 text-2xl font-bold">
        <h1>{aboutText.about.title[`EN`]}</h1>
        <h1 className="mb-1 text-3xl font-bold">Khairul Habibie</h1>
      </div>
      <div className="flex">
        <div>
          <div className="container">
            <figure className="float-right">
              <img
                className="hidden sm:block"
                width="200px"
                src={aboutText.img_url}
                alt="khairul-habibie.webp"
              />
            </figure>
            <article className="space-y-4 text-gray-300 md:text-justify">
              {aboutText.about.body.map((text) => (
                <p key={text.id}>{text[`EN`]}</p>
              ))}
            </article>
          </div>
          <div className="my-20 space-y-4">
            <h1 className="text-2xl font-bold">Current Favorite Tech Stack</h1>
            <ul className="flex space-x-3 text-4xl ">
              <li>
                <FaReact />
              </li>
              <li>
                <SiJavascript />
              </li>
              <li>
                <SiTailwindcss />
              </li>
              <li>
                <FaNodeJs />
              </li>
            </ul>
          </div>
          <div className="my-5 space-y-2">
            <h1 className="text-2xl font-bold">
              {aboutText.contact.title[`EN`]}
            </h1>
            <div className="text-gray-300">
              <p>{aboutText.contact.body[`EN`]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
