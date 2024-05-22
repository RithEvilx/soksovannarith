import PropTypes from "prop-types";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt="icon" />
      </div>
      <a
        href={text === "sovannarith22317@gmail.com" ? `mailto:${text}` : text}
        style={{ color: "#fff" }}
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
};

// Define propTypes for component
ContactInfoCard.propTypes = {
  iconUrl: PropTypes.string.isRequired, // iconUrl should be a string and is required
  text: PropTypes.string.isRequired, // text should be a string and is required
};

export default ContactInfoCard;
