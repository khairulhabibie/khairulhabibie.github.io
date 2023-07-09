import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-wrap justify-between bg-black border-b ">
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
