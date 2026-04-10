import React from 'react'
import './skills.css'
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='skills'
    >

      <h2 className='heading1'>My Skills</h2>

      {/* 🔹 Languages */}
      <h3 className='heading2'>Languages</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={85} fill="#03B0FD" txt="JavaScript"/>
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="C++"/>
        </div>
      </div>

      {/* 🔹 Frontend */}
      <h3 className='heading2'>Frontend</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={85} fill="#03B0FD" txt="HTML"/>
          <SemiDonutChart percentage={75} fill="#03B0FD" txt="CSS"/>
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="React JS"/>
        </div>
      </div>

      {/* 🔹 Backend */}
      <h3 className='heading2'>Backend</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="Node.js"/>
          <SemiDonutChart percentage={75} fill="#03B0FD" txt="Express.js"/>
        </div>
      </div>

      {/* 🔹 Database */}
      <h3 className='heading2'>Database</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={75} fill="#03B0FD" txt="MongoDB"/>
        </div>
      </div>

      {/* 🔹 Tools */}
      <h3 className='heading2'>Tools</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="Git"/>
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="GitHub"/>
          <SemiDonutChart percentage={65} fill="#03B0FD" txt="Redux"/>
        </div>
      </div>

    </motion.div>
  )
}

export default Skills;