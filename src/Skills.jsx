import React from 'react'
import './skills.css'
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 85, color: "#f7df1e" },
      { name: "Java", level: 70, color: "#f89820" },
    ]
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML", level: 90, color: "#e34f26" },
      { name: "CSS", level: 80, color: "#1572b6" },
      { name: "React JS", level: 82, color: "#61dafb" },
    ]
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 78, color: "#68a063" },
      { name: "Express.js", level: 75, color: "#ffffff" },
    ]
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 75, color: "#4db33d" },
      { name: "MySQL", level: 70, color: "#00758f" },
    ]
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 75, color: "#f05032" },
      { name: "GitHub", level: 75, color: "#ffffff" },
      { name: "Redux", level: 65, color: "#764abc" },
    ]
  },
  {
    title: "UI/UX",
    icon: "🎯",
    skills: [
      { name: "Figma", level: 75, color: "#f24e1e" },
      { name: "Responsive Design", level: 85, color: "#00cefc" },
      { name: "Tailwind CSS", level: 70, color: "#38bdf8" },
    ]
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='skills' id="skills"
    >
      <div className="skills_header">
        <div className="skills_tag">What I Know</div>
        <h2 className='skills_title'>My <span className="skills_highlight">Skills</span></h2>
      </div>

      <div className="skills_grid">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={ci}
            className="skill_category_card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="skill_cat_header">
              <span className="skill_cat_icon">{category.icon}</span>
              <h3 className="skill_cat_title">{category.title}</h3>
            </div>

            <div className="skill_list">
              {category.skills.map((skill, si) => (
                <div key={si} className="skill_item">
                  <div className="skill_info">
                    <span className="skill_name">{skill.name}</span>
                    <span className="skill_percent">{skill.level}%</span>
                  </div>
                  <div className="skill_bar_bg">
                    <motion.div
                      className="skill_bar_fill"
                      style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: si * 0.15, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills;
