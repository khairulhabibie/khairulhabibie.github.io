import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between bg-black border-y-2 md:mx-24">
      <div className="flex">
        <div>
          <Link to="/">
            <p className="px-4 py-2 hover:bg-gray-700">Beranda</p>
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <p className="px-4 py-2 hover:bg-gray-700">Projek</p>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <p className="px-4 py-2 hover:bg-gray-700">Tentang</p>
          </Link>
        </div>
      </div>
      <ul className="flex">
        <li>
          <Link to="/login">
            <p className="px-4 py-2 hover:bg-gray-700">Masuk</p>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <p className="px-4 py-2 hover:bg-gray-700">Daftar</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
