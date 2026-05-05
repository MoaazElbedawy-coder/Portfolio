import { portfolio } from "../../Data";
import { RiLink } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import './portfolio.css'

const Portfolio = () => {
  return (
  <section className="portfolio section">
    <h2 className="section-title">
      My<span>Portfolio</span>
    </h2> 
{/* npm run dev */}
    <div className="portfolio-container container grid">
      {portfolio.map(({id, img, title, description, skills, link, github}) => {
        return (
          <article className="portfolio-card" key={id}>
            <a href={link} className="portfolio-img-wrapper">
              <img src={img} className="portfolio-img"/>
            </a>
            <h3 className="portfolio-title">{title}</h3>
            <p className="portfolio-description">{description}</p>

            <div className="portfolio-skills">
            {skills.map((skill, index) => {
              return (
                <img src={skill} className="portfolio-skill" key={index}/> 
              )
            })}
          </div>
          <div className="portfolio-links">
            <a href={link} className="portfolio-link">
              <RiLink className="link-icon"/>
              Visit Project
            </a>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                <FaGithub className="link-icon"/>
                GitHub
              </a>
            )}
          </div>
          </article>
        );
      })}
    </div>
  </section>
  );
};

export default Portfolio;
