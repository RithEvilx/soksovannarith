import { useState } from "react";
import "./Navbar.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiClose } from "@mdi/js";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const style = {
    width: "70px",
    height: "65px",
    object_fit: "cover",
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src="./assets/images/logo.png"
            alt="logo"
            style={style}
          />
          <ul>
            <li>
              <a href="#" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#work_experience" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                Contact Me
              </a>
            </li>
            <a href="mailto:sovannarith22317@gmail.com" className="contact-btn" onClick={() => {}}>
              Hire Me
            </a>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <Icon path={mdiClose} size={1} />
            ) : (
              <Icon path={mdiMenu} size={1} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
