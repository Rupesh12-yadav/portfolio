import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import BackToTopButton from './BackToTopButton';
import './stylle.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3033/api/send', formData);
      alert(response.data);
    } catch (error) {
      alert('Error sending email');
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="contact_tag">Get In Touch</div>
      <h2 className="contact_title">Contact <span className="contact_highlight">Me</span></h2>
      <p className="contact_subtitle">Have a project in mind? Let's work together!</p>

      <div className="contact_wrapper">

        {/* Left Info */}
        <div className="contact_info">
          <div className="contact_info_card">
            <div className="contact_info_icon"><FontAwesomeIcon icon={faPhone} /></div>
            <div>
              <p className="contact_info_label">Phone</p>
              <a href="tel:7089289335" className="contact_info_value">+91 7089289335</a>
            </div>
          </div>
          <div className="contact_info_card">
            <div className="contact_info_icon"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div>
              <p className="contact_info_label">Email</p>
              <a href="mailto:rupeshyadav6129@gmail.com" className="contact_info_value">rupeshyadav6129@gmail.com</a>
            </div>
          </div>

          <div className="contact_socials">
            <a href="https://github.com/Rupesh12-yadav" target="_blank" rel="noreferrer" className="contact_social_btn">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/rupesh-gavli-656b463a1" target="_blank" rel="noreferrer" className="contact_social_btn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/rupesh__4k9/" target="_blank" rel="noreferrer" className="contact_social_btn">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_form_group">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact_input"
            />
          </div>
          <div className="contact_form_group">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact_input"
            />
          </div>
          <div className="contact_form_group">
            <textarea
              placeholder="Your Message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact_input contact_textarea"
            ></textarea>
          </div>
          <button type="submit" className="contact_submit_btn">
            <FontAwesomeIcon icon={faPaperPlane} />
            &nbsp; Send Message
          </button>
        </form>

      </div>

      <p className="contact_footer">© 2024 Rupesh Yadav. All rights reserved.</p>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;
