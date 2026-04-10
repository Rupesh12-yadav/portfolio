import React from 'react';
import './why.css';
import { motion } from 'framer-motion';

const reasons = [
  { icon: "⚛️", value: "MERN", label: "Stack Developer", desc: "Learning Multiple Technologies" },
  { icon: "💡", value: "Problem", label: "Solver", desc: "DSA & real world solutions" },
  { icon: "⚡", value: "Scalable", label: "System Design", desc: "Build fast & scalable web apps" },
  { icon: "⏰", value: "Time", label: "Management", desc: "Deliver projects on time, always" },
];

const WhyHireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="why_section"
    >
      <div className="why_tag">Why Choose Me</div>
      <h2 className='heading1'>Why Hire <span style={{ color: '#00cefc' }}>Me?</span></h2>

      <div className="why_grid">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            className="box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="why_icon">{item.icon}</div>
            <h4 className='mid_text'>{item.value}</h4>
            <p className='main_text_why'>{item.label}</p>
            <p className='why_desc'>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default WhyHireMe;
