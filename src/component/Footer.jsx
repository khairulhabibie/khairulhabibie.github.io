import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 space-y-2 bg-black border-t">
      <div className="flex justify-center gap-5 text-2xl text-gray-400">
        <div className="btn">
          <MdOutlineMailOutline />
        </div>
        <div className="btn">
          <FaGithub />
        </div>
        <div className="btn">
          <FaLinkedin />
        </div>
        <div className="btn">
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}

export default Footer;
