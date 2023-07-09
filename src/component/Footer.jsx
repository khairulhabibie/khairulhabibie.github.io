import { MdOutlineMailOutline } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 space-y-2 bg-black border-t">
      <ul className="flex justify-center gap-5 py-2 mt-1 text-2xl text-gray-400">
        <li>
          <MdOutlineMailOutline />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaTwitter />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
