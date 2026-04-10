import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const educations = [
  {
    icon: '🏫',
    badge: '10th',
    degree: 'Secondary Education',
    school: 'Govt Higher School - Sandalpur (MP)',
    year: '2019-20',
    score: '58%',
    type: 'school'
  },
  {
    icon: '🏫',
    badge: '12th',
    degree: 'Higher Secondary',
    school: 'Govt Higher Secondary School - Sandalpur (MP)',
    year: '2022-2023',
    score: '71.9%',
    type: 'school'
  },
  {
    icon: '🎓',
    badge: "Bachelor's",
    degree: 'Bachelor of Computer Applications',
    school: 'Vikram University',
    year: '2023 – 2026',
    score: '7.90 CGPA',
    type: 'college'
  },
  {
    icon: '🎓',
    badge: "Master's",
    degree: 'MCA - Computer Science',
    school: 'RGPA University',
    year: '2026 – 2028',
    score: '7.90 CGPA',
    type: 'college'
  },
];

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className='about_me' id="aboutMey"
    >
      {/* About Me */}
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

      {/* Education 4 Cards */}
      <div className="edu_section">
        <div className="about_tag">My Journey</div>
        <h2 className='about_title'>Edu<span className="about_highlight">cation</span></h2>

        <div className="edu_grid">
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              className={`edu_card ${edu.type === 'college' ? 'edu_card_college' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="edu_card_header">
                <div className="edu_icon_circle">{edu.icon}</div>
                <span className={`edu_badge ${edu.type === 'college' ? 'edu_badge_gold' : ''}`}>
                  {edu.badge}
                </span>
              </div>

              <h3 className="edu_degree">{edu.degree}</h3>
              <p className="edu_school">🏛️ {edu.school}</p>

              <div className="edu_footer">
                <span className="edu_year">📅 {edu.year}</span>
                <span className={`edu_score ${edu.type === 'college' ? 'edu_score_gold' : ''}`}>
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  )
}

export default AboutMe
