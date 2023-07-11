import { Link } from 'react-router-dom';
import { FaHome, FaBloggerB } from 'react-icons/fa';
import { RiProfileFill } from 'react-icons/ri';
import { AiFillProject } from 'react-icons/ai';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';

function Navbar({ pathname }) {
  const active = (data) => {
    return pathname === data ? 'nav-btn-active' : 'nav-btn';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-wrap justify-between bg-black border-b ">
      <div className="flex flex-wrap ">
        <Link to="/" className={active('/')}>
          <FaHome />
          <p>Home</p>
        </Link>
        <Link to="/project" className={active('/project')}>
          <AiFillProject />
          <p>Project</p>
        </Link>
        <Link to="/blog" className={active('/blog')}>
          <FaBloggerB />
          <p>Blog</p>
        </Link>
        <Link to="/about" className={active('/about')}>
          <RiProfileFill />
          <p>About</p>
        </Link>
      </div>
      <div className="flex">
        <Link to="/login" className={active('/login')}>
          <IoMdLogIn />
          <p>Login</p>
        </Link>
        <Link to="/register" className={active('/register')}>
          <IoMdLogOut />
          <p>Register</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
