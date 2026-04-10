import React from 'react'
import { motion } from 'framer-motion';
import technician from "./images/Screenshot (681).png"
import school from "./images/Screenshot (680).png"
import vehicle from "./images/Screenshot (682).png"
import './style.css'

const cards = [
  {
    imageUrl: technician,
    altText: 'Technician Booking',
    title: 'Technician Booking System',
    tags: ['MERN', 'React', 'Node.js'],
    description: 'A MERN stack application where users can book electricians, plumbers, and other technicians. Includes authentication, booking system, and admin panel.',
    explore: "https://fix-hub-ten.vercel.app/"
  },
  {
    imageUrl: school,
    altText: 'School Booking',
    title: 'School Booking System',
    tags: ['MERN', 'MongoDB', 'Express'],
    description: 'A web application for managing school bookings such as classes, events, and student registrations with admin dashboard.',
    explore: "https://school-managementss.netlify.app/"
  },
  {
    imageUrl: vehicle,
    altText: 'Vehicle Booking',
    title: 'Vehicle Booking System',
    tags: ['MERN', 'React', 'MongoDB'],
    description: 'A MERN-based vehicle rental system where users can book cars/bikes, view availability, and manage bookings.',
    explore: "https://vehilce-management-1.onrender.com/"
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="projects_section" id="project"
    >
      <div className="projects_tag">What I Built</div>
      <h2 className='heading1'>My <span className="proj_highlight">Projects</span></h2>

      <div className="projects_grid">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="proj_card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="proj_img_wrapper">
              <img src={card.imageUrl} alt={card.altText} className="proj_img" />
              <div className="proj_overlay">
                <button className="proj_live_btn" onClick={() => window.open(card.explore, '_blank')}>
                  🚀 Live Demo
                </button>
              </div>
            </div>
            <div className="proj_content">
              <div className="proj_tags">
                {card.tags.map((tag, i) => (
                  <span key={i} className="proj_tag">{tag}</span>
                ))}
              </div>
              <h3 className="proj_title">{card.title}</h3>
              <p className="proj_desc">{card.description}</p>
              <button className="proj_btn" onClick={() => window.open(card.explore, '_blank')}>
                View Project <span>→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
