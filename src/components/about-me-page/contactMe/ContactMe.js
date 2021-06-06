import React from "react";
import "./app.css";

const ContactMe = ({ scrollToTop }) => {
  return (
    <div className="about-me-section">
      <div id="contact-me-holder">
        <form action="https://formspree.io/f/meqpyddp" method="POST" className="contactMe">
          <h1>Reach out </h1>
          <div>
            <input
              placeholder="Your Email"
              type="email"
              className="email"
              name="_replyto"
              autoComplete={"off"}
            />
          </div>
          <div>
            <textarea
              className="message"
              name="message"
              placeholder="Your message to me"
            ></textarea>
          </div>
          <div className="status"></div>
          <button type="submit" className="submit">
            Send
          </button>
        </form>
      </div>

      <div className="return-to-top" onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
        <p>Return to top</p>
      </div>
    </div>
  );
};

export default ContactMe;
