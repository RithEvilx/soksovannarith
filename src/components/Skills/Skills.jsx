import { useState } from "react";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import "./Skills.css";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = () => {
  const [selectdSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <>
      <section className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
          <div className="skills">
            {SKILLS.map((item) => (
              <SkillCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectdSkill.title == item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            ))}
          </div>
          <div className="skills-info">
            <SkillsInfoCard
              heading={selectdSkill.title}
              skills={selectdSkill.skills}
            />
          </div>
        </div>
        <span id="work_experience" style={{width:"100%", padding:"30px"}}></span>
      </section>
    </>
  );
};

export default Skills;
