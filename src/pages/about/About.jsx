import Info from "../../components/info";
import Stats from "../../components/stats";
import Cv from "../../pdf/Moaaz-Cv.pdf";
import { RiDownload2Line } from "react-icons/ri";
import { skill } from "../../Data";
import SkillsItem from "../../components/SkillsItem";
import { resume } from "../../Data";
import Resumeitem from "../../components/Resumeitem";
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          About<span>Me</span>
        </h2>

        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Infos</h3>
            <ul className="info-list grid">
              <Info />
            </ul>
            <a href={Cv} download="" className="button">
              Download Cv
              <span className="button-icon">
                <RiDownload2Line />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">My skills</h3>
        <div className="skills-container grid">
          <div className="skills-group">
            <h3 className="skills-title">Mearn Stack Deneloper</h3>
            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === "developer") {
                  return <SkillsItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-title">Web Designer</h3>
            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === "designer") {
                  return <SkillsItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section>
        <h3 className="section-subtitle subtitle-center">
          Education & Experience
        </h3>

        <div className="resume-container grid">
          <div className="resume-group grid">
            {resume.map((val) => {
              if (val.category === "education") {
                return <Resumeitem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className="resume-group grid">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <Resumeitem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
