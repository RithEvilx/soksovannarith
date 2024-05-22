import PropTypes from "prop-types";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img
            src="./assets/images/logo.png"
            alt="mobile_logo"
            className="logo"
          />
          <ul>
            <li>
              <a href="#" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

// Define propTypes for component
MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required
  toggleMenu: PropTypes.func.isRequired, // toggleMenu should be a function and is required
};

export default MobileNav;
