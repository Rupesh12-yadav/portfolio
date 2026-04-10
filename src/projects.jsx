import React from 'react'
import Card from './Card';

import technician from "./images/Screenshot (681).png"
import school from "./images/Screenshot (680).png"
import vehicle from "./images/Screenshot (682).png"

import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: technician,
          altText: 'Technician Booking',
          title: 'Technician Booking System',
          description: 'A MERN stack application where users can book electricians, plumbers, and other technicians. Includes authentication, booking system, and admin panel.',
          explore: "https://fix-hub-ten.vercel.app/"
        },
        {
          imageUrl: school,
          altText: 'School Booking',
          title: 'School Booking System',
          description: 'A web application for managing school bookings such as classes, events, and student registrations with admin dashboard.',
          explore: "https://school-managementss.netlify.app/"
        },
        {
          imageUrl: vehicle,
          altText: 'Vehicle Booking',
          title: 'Vehicle Booking System',
          description: 'A MERN-based vehicle rental system where users can book cars/bikes, view availability, and manage bookings.',
          explore: "https://vehilce-management-1.onrender.com/"
        },

        // 🔽 Old Projects (same as before
    ];

  return (
    <motion.div
      initial={{ opacity:0, y:40 }} 
      whileInView={{ opacity:1, y:0 }}
      transition={{ delay:0.2, duration:0.5 }}
      viewport={{ margin:"-100px", once:true }}
      className="up_gap" id="project"
    >
        <h2 className='heading1 down_gap'>Projects</h2>

        <div className="completely">
          <div className="grid">
            {cards.map((card, index) => (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                altText={card.altText}
                title={card.title}
                description={card.description}
                explore={card.explore}
              />
            ))}
          </div>
        </div>
    </motion.div>
  )
}

export default Projects