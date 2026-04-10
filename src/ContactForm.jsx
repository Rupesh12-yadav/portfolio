import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import BackToTopButton from './BackToTopButton';
import './stylle.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_yz7xiv9',       // 👉 EmailJS Service ID
      'template_gg1qlmp',      // 👉 EmailJS Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'rupeshyadav6129@gmail.com',
      },
      'zZqy52OOrIr1J9xUf'        // 👉 EmailJS Public Key
    ).then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }).catch(() => {
      setStatus('error');
    });
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
          <button type="submit" className="contact_submit_btn" disabled={status === 'sending'}>
            <FontAwesomeIcon icon={faPaperPlane} />
            &nbsp; {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className="contact_status success">✅ Message sent successfully!</p>}
          {status === 'error' && <p className="contact_status error">❌ Failed to send. Try again.</p>}
        </form>

      </div>

      <p className="contact_footer">© 2024 Rupesh Yadav. All rights reserved.</p>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;
