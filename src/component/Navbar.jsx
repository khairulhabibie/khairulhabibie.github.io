import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between bg-black border-b md:mx-24">
      <div className="flex">
        <div>
          <Link to="/">
            <p className="btn">Beranda</p>
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <p className="btn">Projek</p>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <p className="btn">Tentang</p>
          </Link>
        </div>
      </div>
      <ul className="flex">
        <li>
          <Link to="/login">
            <p className="btn">Masuk</p>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <p className="btn">Daftar</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
