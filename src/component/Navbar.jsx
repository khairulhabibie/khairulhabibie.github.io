import { Link } from 'react-router-dom';
import { inLink } from '../utils/translate/navbar';

function Navbar() {
  return (
    <>
      <div className="w-full h-2 bg-sky-400">-</div>
      <nav className="relative left-0 right-0 flex flex-row justify-between mx-4 top-10 md:mx-24">
        <ul className="flex felx-row">
          {inLink.map((text) => (
            <li key={text.id}>
              <Link to={text.path}>
                <p className="px-4 py-2 hover:bg-gray-700">{text.EN}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
