import PropTypes from "prop-types";
import "./ExperienceCard.css";
import Icon from "@mdi/react";
import { mdiArrowTopRightBoldBoxOutline } from "@mdi/js";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h2>{details.title}</h2>
      <ul>
        {details.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="img-demo">
        <img src={details.img} alt={details.title} />
      </div>
      <div className="live-demo">
        <a href={details.url.page} target="_blank" rel="noopener noreferrer">
          demo <Icon path={mdiArrowTopRightBoldBoxOutline} size={"15px"} />
        </a>
        <a href={details.url.github} target="_blank" rel="noopener noreferrer">
          github <Icon path={mdiArrowTopRightBoldBoxOutline} size={"15px"} />
        </a>
      </div>
      <span id="contact"></span>
    </div>
  );
};

ExperienceCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.shape({
      page: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
    }).isRequired,
    img: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ExperienceCard;
