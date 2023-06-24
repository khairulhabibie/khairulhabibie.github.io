import { Link } from 'react-router-dom';
import { navbarText } from '../utils/translate/navbar-text';

function Navbar() {
  return (
    <>
      <nav className="relative left-0 right-0 flex flex-row justify-between mx-4 border-y-2 top-10 md:mx-24">
        <ul className="flex felx-row">
          {navbarText.map((text) => (
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
