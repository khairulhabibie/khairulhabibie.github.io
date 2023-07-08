import { Link } from 'react-router-dom';
import { homeText } from '../utils/translate/home-text';
function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="mb-5 font-bold">
        <h2 className="text-xl md:text-3xl">Hi!</h2>
        <h1 className="text-2xl md:text-4xl">{homeText.title[`EN`]}</h1>
      </div>
      <p className="w-full text-lg md:w-5/6">{homeText.body[`EN`]}</p>
      <ul className="flex flex-wrap gap-4 my-8">
        {homeText.inLink.map((text) => (
          <li key={text.id}>
            <Link to={text.path}>
              <p className="border border-solid btn">{text.EN}</p>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-3">
        {homeText.exLinkL.map((text) => (
          <li className="flex items-center space-x-1" key={text.id}>
            <a href={text.link} target="__blank">
              <p>{text.body}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
