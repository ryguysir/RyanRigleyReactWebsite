import React from "react";
import "./app.css";
import "../../../App.css";
import Fade from "react-reveal/Fade";

const ContactMe = ({ scrollToTop }) => {
  return (
    <div className="about-me-section">
      <div id="contact-me-holder">
        <form action="https://formspree.io/f/meqpyddp" method="POST" className="contactMe">
          <Fade top cascade>
            <h1>Reach out </h1>
          </Fade>
          <div>
            <Fade left cascade>
              <input
                placeholder="Your Email"
                type="email"
                className="email"
                name="_replyto"
                autoComplete={"off"}
              />
            </Fade>
          </div>
          <div>
            <Fade right cascade>
              <textarea
                className="message"
                name="message"
                placeholder="Your message to me"
              ></textarea>
            </Fade>
          </div>
          <div className="status"></div>
          <Fade bottom cascade>
            <button type="submit" className="submit">
              Send
            </button>
          </Fade>
        </form>
      </div>
      <Fade bottom cascade>
        <div className="return-to-top" onClick={scrollToTop}>
          <i className="fas fa-chevron-up"></i>
          <p>Return to top</p>
        </div>
      </Fade>
    </div>
  );
};

export default ContactMe;
