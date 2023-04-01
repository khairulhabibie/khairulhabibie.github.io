import React from "react";
import "./Navbar.scss";
import dbContacts from "../../Utils/dbContacts.json";

const Navbar = () => {
  return (
    <nav>
      {dbContacts.map((contact) => (
        <a key={`${contact.href}`} href={`${contact.href}`}>
          <i className={`${contact.className}`}></i>
          {/* <p>{`${contact.text}`}</p> */}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
