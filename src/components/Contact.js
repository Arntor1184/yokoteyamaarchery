import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleAttachFile = () => {
    alert("Straight into the garbage! Send me a letter if it's important!");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="contact">
      <section id="contact">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
          ></textarea>

          <label htmlFor="contact-reason">Reason for Contact:</label>
          <select id="contact-reason" name="contact-reason" required>
            <option value="tournament-entry">Tournament Entry</option>
            <option value="purchase">Purchase</option>
            <option value="lesson-signup">Lesson Sign Up</option>
            <option value="general-enquiry">General Enquiry</option>
          </select>

          <div className="radio-group">
  <span>Is your message urgent?</span>
  <label>
    <input type="radio" id="urgent-yes" name="is-urgent" value="yes" />
    Yes
  </label>
  <label>
    <input type="radio" id="urgent-no" name="is-urgent" value="no" />
    No
  </label>
</div>


          <label>
            <button type="button" onClick={handleAttachFile}>
              Attach File
            </button>
          </label>

          <button type="submit">Submit</button>
        </form>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>
                Thank you for contacting us! Your message will shoot straight through to
                Arthur himself.
              </p>
              <button onClick={handleClosePopup}>OK</button>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default Contact;
