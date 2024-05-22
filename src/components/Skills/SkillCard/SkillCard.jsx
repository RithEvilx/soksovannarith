import PropTypes from "prop-types";
import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <>
      <div
        className={`skills-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
      >
        <div className="skill-icon">
          <img src={iconUrl} alt={title} />
        </div>
        <span>{title}</span>
      </div>
    </>
  );
};

// Define propTypes for component
SkillCard.propTypes = {
  title: PropTypes.string.isRequired, // title should be a string and is required
  iconUrl: PropTypes.string.isRequired, // iconUrl should be a string and is required
  isActive: PropTypes.bool.isRequired, // isActive should be a boolean and is required
  onClick: PropTypes.func.isRequired, // onClick should be a function and is required
};

export default SkillCard;
