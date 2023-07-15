import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBloggerB } from 'react-icons/fa';
import { RiProfileFill } from 'react-icons/ri';
import { AiFillProject } from 'react-icons/ai';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { BiNotepad } from 'react-icons/bi';

function Navbar({ pathname }) {
  const navigate = useNavigate();
  const active = (data) => {
    return pathname === data ? 'nav-btn-active' : 'nav-btn';
  };
  function logOutHandler() {
    alert('The user has logged out successfully!');
    navigate('/');
  }
  return (
    <nav className="fixed top-0 left-0 right-0 flex-wrap bg-black border-b md:justify-between md:flex">
      <section className="static flex flex-col md:relative">
        <div className="flex flex-row flex-wrap">
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
  <Link to="/ranah" className={active('/ramah')}>
            <RiProfileFill />
            <p>Ranah</p>
          </Link>

  <Link to="/tree" className={active('/tree')}>
            <RiProfileFill />
            <p>Tree</p>
          </Link>        </div>
      </section>
      <section className="hidden md:flex">
        <Link to="/login" className={active('/login')}>
          <IoMdLogIn />
          <p>Login</p>
        </Link>
        <Link to="/register" className={active('/register')}>
          <BiNotepad />
          <p>Register</p>
        </Link>
        <button onClick={logOutHandler} className="nav-btn">
          <IoMdLogOut />
          <p>LogOut</p>
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
