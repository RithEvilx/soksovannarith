import "./Hero.css";
import {Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h1>
            I&apos;m a
            <Typewriter
              words={[" Frontend Developer"]}
              typeSpeed={80}
              deleteSpeed={50}
              loop
            />
          </h1>
          <p>
            Passionate Frontend Developer | Transforming Ideas into Seamless and
            Vissually Stunning Web Solutions
          </p>
        </div>
        <div className="hero-img">
          <div>
            <img
              style={{ borderRadius: "35px" }}
              src="./assets/images/profile.png"
              alt="profile"
            />
          </div>
          <div id="skills">
            <div className="tech-icon">
              <img src="./assets/images/img1.png" alt="react_icon" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/img2.png" alt="html_icon" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/img3.png" alt="css_icon" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/img4.png" alt="js_icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
