import React from "react";
import PropTypes from "prop-types";
import "./SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skill}</p>
              <p className="percentage">{item.percentage}</p>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: item.percentage }}
              ></div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Define propTypes for component
SkillsInfoCard.propTypes = {
  heading: PropTypes.string.isRequired, // heading should be a string and is required
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      // skills should be an array of objects
      skill: PropTypes.string.isRequired, // Each skill object should have a 'skill' key which is a string and is required
      percentage: PropTypes.string.isRequired, // Each skill object should have a 'percentage' key which is a string and is required
    })
  ).isRequired,
};

export default SkillsInfoCard;
