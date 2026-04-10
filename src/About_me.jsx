import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className='about_me' id="aboutMey"
    >
      {/* About Me Section */}
      <div className="about_section">
        <div className="about_tag">Who Am I</div>
        <h2 className='about_title'>About <span className="about_highlight">Me</span></h2>
        <div className="about_card">
          <div className="about_avatar">RY</div>
          <div className="about_text_block">
            <p className='about_desc'>
              Hello! I'm <span className="about_highlight">Rupesh Yadav</span>, a passionate Full Stack Developer.
              I love building web applications and solving real-world problems through code.
              Always eager to learn new technologies and collaborate on exciting projects!
            </p>
            <div className="about_stats">
              <div className="stat_item">
                <span className="stat_num">3+</span>
                <span className="stat_label">Projects</span>
              </div>
              <div className="stat_item">
                <span className="stat_num">2+</span>
                <span className="stat_label">Years Learning</span>
              </div>
              <div className="stat_item">
                <span className="stat_num">10+</span>
                <span className="stat_label">Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="edu_section">
        <div className="about_tag">My Journey</div>
        <h2 className='about_title'>Edu<span className="about_highlight">cation</span></h2>
        <div className="education_grid">

          <motion.div className="edu_card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="edu_top">
              <span className="edu_icon">🏫</span>
              <span className="edu_badge">10th</span>
            </div>
            <h3 className="edu_degree">Secondary Education</h3>
            <p className="edu_school">Shri Ram High School, Nagpur</p>
            <div className="edu_bottom">
              <span className="edu_year">📅 2018</span>
              <span className="edu_score">85%</span>
            </div>
          </motion.div>

          <motion.div className="edu_card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="edu_top">
              <span className="edu_icon">🏫</span>
              <span className="edu_badge">12th</span>
            </div>
            <h3 className="edu_degree">Higher Secondary</h3>
            <p className="edu_school">Shri Ram Junior College, Nagpur</p>
            <div className="edu_bottom">
              <span className="edu_year">📅 2020</span>
              <span className="edu_score">78%</span>
            </div>
          </motion.div>

          <motion.div className="edu_card edu_card_highlight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="edu_top">
              <span className="edu_icon">🎓</span>
              <span className="edu_badge edu_badge_gold">Bachelor's</span>
            </div>
            <h3 className="edu_degree">B.Tech - Computer Science</h3>
            <p className="edu_school">RTM Nagpur University</p>
            <div className="edu_bottom">
              <span className="edu_year">📅 2020 – 2024</span>
              <span className="edu_score">8.2 CGPA</span>
            </div>
          </motion.div>

          <motion.div className="edu_card edu_card_highlight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="edu_top">
              <span className="edu_icon">🎓</span>
              <span className="edu_badge edu_badge_gold">Master's</span>
            </div>
            <h3 className="edu_degree">M.Tech - Computer Science</h3>
            <p className="edu_school">RTM Nagpur University</p>
            <div className="edu_bottom">
              <span className="edu_year">📅 2024 – 2026</span>
              <span className="edu_score">9.0 CGPA</span>
            </div>
          </motion.div>

        </div>
      </div>

    </motion.div>
  )
}

export default AboutMe
