import Profile from '../../assets/home.png'
import ProfileMobile from '../../assets/home-mobile.png'
import { Link } from 'react-router';
import { RiArrowRightLine } from "react-icons/ri";
import './home.css'

const Home = () => {
  return (
    <section className="home-container grid">
      <picture>
        <source media="(max-width: 1025px)" srcSet={ProfileMobile} />
        <img src={Profile} alt="" className='home-img' />
      </picture>

      <div className="home-content">
        <h1 className='home-title'><span>I'm Mearn Stack</span> <br/> Web Develober</h1>
        <p className="home-description">
          I,m a MERN Stack Developer skilled in MongoDB, Express.js, React, and Node.js.
          I build responsive, user-friendly web applications with clean and efficient code.
          Passionate about learning, improving, and delivering high-quality solutions.
        </p>
        <Link to='/about' className="button">More About Me
          <span className="button-icon">
            <RiArrowRightLine />
          </span>
        </Link>
      </div>

      <div className="color-block"></div>
    </section>
  )
}

export default Home;