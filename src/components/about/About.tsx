import "./About.css";
import { FiAward, FiUsers } from "react-icons/fi";
import ME from "../../../src/assets/about-me.png";
import { VscFolderActive } from "react-icons/vsc";
import { FaUniversity } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>Education</h5>
              <small>City University of Hong Kong</small>
            </article>
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>Junior Full-stack Developer</small>
            </article>
            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Currently working as Junior Fullstack develoer. Always try my best
            in my job, eagar to learn new techniques, and also trying for the
            best output.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
