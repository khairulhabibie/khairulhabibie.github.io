import { Link } from 'react-router-dom';
import { FaHome, FaBloggerB } from 'react-icons/fa';
import { RiProfileFill } from 'react-icons/ri';
import { AiFillProject } from 'react-icons/ai';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-wrap justify-between bg-black border-b ">
      <div className="flex">
        <Link to="/" className="nav-btn">
          <FaHome />
          <p>Home</p>
        </Link>
        <Link to="/projects" className="nav-btn">
          <AiFillProject />
          <p>Project</p>
        </Link>
        <Link to="/blog" className="nav-btn">
          <FaBloggerB />
          <p>Blog</p>
        </Link>
        <Link to="/about" className="nav-btn">
          <RiProfileFill />
          <p>About</p>
        </Link>
      </div>
      <div className="flex">
        <Link to="/login" className="nav-btn">
          <IoMdLogIn />
          <p>Login</p>
        </Link>
        <Link to="/register" className="nav-btn">
          <IoMdLogOut />
          <p>Resgiter</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
