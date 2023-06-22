import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="w-full h-2 bg-sky-400">-</div>
      <nav className="relative left-0 right-0 flex flex-row justify-between mx-4 top-10 md:mx-24">
        <ul className="flex felx-row">
          <li>
            <Link to="/.">
              <p className="px-4 py-2 hover:bg-gray-700">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <p className="px-4 py-2 hover:bg-gray-700">Project</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p className="px-4 py-2 hover:bg-gray-700">About</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
