import PropTypes from "prop-types";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <div className="live-demo">
        <h6>({details.title})</h6>
        <a href={details.url} target="_blank">
          live demo
        </a>
      </div>
      <p>{details.description}</p>
      <div className="img-demo">
        <img src={details.img} alt={details.title} />
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExperienceCard;
