import { useState } from "react";
import { RiMap2Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiBook2Line } from "react-icons/ri";
import { RiSendPlaneLine } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import "./contact.css";

// npm run dev

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handeleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessageColor('color-red');
      setFeedbackMessage('Write all the input fields');

      setTimeout(() => setFeedbackMessage(''), 3000);
      return;
    };

    emailjs
      .send('service_ykhsurk', 'template_2zcdj5h', formData, 'tAwY3uBcUszexyzGS'
      )
      .then(
        () => {
          setMessageColor('color-first');
          setFeedbackMessage('Message sent ✔');

          setTimeout(() => setFeedbackMessage(''), 5000);

          setFormData({name: '', email: '', subject: '', message: ''})
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error);
        },
      );
  }

  return (
    <section className="contact section">
      <h2 className="section-title">
        Contact<span>Me</span>
      </h2>

      <div className="contact-container container grid">
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMap2Line />
            </span>
            <div>
              <h3 className="contact-title">Address</h3>
              <p className="contact-data">Riyadh, Kafr El-sheikh, Egypt</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiUser3Line />
            </span>
            <div>
              <h3 className="contact-title">Freelance</h3>
              <div className="contact-data">Available Right Now</div>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiMailLine />
            </span>
            <div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-data">moaazelbedawy@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiBook2Line />
            </span>
            <div>
              <h3 className="contact-title">Phone</h3>
              <p className="contact-data">+201095731606</p>
            </div>
          </div>
        </div>

        <form className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label htmlFor="name" className="contact-form-label">
                Your full Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                onChange={handeleChange}
                value={formData.name}
                className="contact-form-input"
              />
            </div>

            <div className="contact-form-div">
              <label htmlFor="email" className="contact-form-label">
                Your Email Address <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                onChange={handeleChange}
                value={formData.email}
                className="contact-form-input"
              />
            </div>
          </div>

          <div className="contact-form-div">
            <label htmlFor="subject" className="contact-form-label">
              Your Subject <b>*</b>
            </label>
            <input
              type="text"
              name="subject"
              onChange={handeleChange}
              value={formData.subject}
              className="contact-form-input"
            />
          </div>

          <div className="contact-form-div">
            <label htmlFor="message" className="contact-form-label">
              Your Message <b>*</b>
            </label>
            <textarea
              name="message"
              onChange={handeleChange}
              value={formData.message}
              className="contact-form-input contact-form-area"
            ></textarea>
          </div>

          <div className="contact-button">
            <button type="submit" className="button">
              Send Message
              <span className="button-icon">
                <RiSendPlaneLine />
              </span>
            </button>
          </div>
          {feedbackMessage && (
            <p className={`contact-message ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
