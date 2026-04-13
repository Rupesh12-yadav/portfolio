
import './main2.css'
import github from './images/github.png'
import linked_in from './images/linked_in.png'
import { motion } from 'framer-motion';
import leetcodes from './images/leetcodes.png';
import photo from './images/photo.jpg';

const Main = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, delay: 0.2 }}
      className='Main' id="mainy"
    >
      {/* Background glow blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* Left Content */}
      <div className="main_left">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="hero_tag">👋 Welcome to my Portfolio</span>
          <h3 className='it_is_me'>Hey! It's Me</h3>
          <h2 className='names'>Rupesh Gavli</h2>
          <p className='i_am_a'>I am a&nbsp;<span className="typewriter"></span></p>
          <p className="hero_desc">Passionate Mern Stack Developer building scalable and modern web applications with clean code and great UI.</p>

          <div className="hero_socials">
            <span className="follow_me">Follow me:</span>
            <div className="logos">
              <a href="https://github.com/Rupesh12-yadav" target="_blank" rel="noreferrer" className="social_link">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/rupesh-gavli-656b463a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="social_link">
                <img src={linked_in} alt="LinkedIn" />
              </a>
              <a href="https://leetcode.com/u/Rupesh__07/" target="_blank" rel="noreferrer" className="social_link">
                <img src={leetcodes} alt="LeetCode" />
              </a>
            </div>
          </div>

          <div className="hero_btns">
            <a href="mailto:rupeshyadav6129@gmail.com">
              <button className='buttonc'>✉ E-Mail Me</button>
            </a>
            <button onClick={() => window.open("/Rupesh-Yadav-Resume.pdf", "_blank")} className='buttonb'>
              📄 Resume
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Photo */}
      <motion.div
        className="right_main"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="photo_ring">
          <div className="photo_wrapper">
            <img src={photo} alt="Rupesh Gavli" className="profile_photo" />
          </div>
        </div>

        {/* Floating badges */}
        <div className="badge badge_mern">⚛️ MERN Stack</div>
        <div className="badge badge_exp">🚀 3+ Projects</div>
      </motion.div>

    </motion.div>
  )
}

export default Main
