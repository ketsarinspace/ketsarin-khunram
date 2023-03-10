import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import Fade from "react-reveal/Fade";
const Contact = () => {
  return (
    <section id="contact">
      {/* <h5>Get In Touch</h5> */}
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <Fade bottom>
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>ketsarinkhunram@gmail.com</h5>
              <a href="mailto:ketsarinkhumram@gmail.com">Send a message</a>
            </article>
          </Fade>
          <Fade bottom>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Facebook Messenger</h4>
              <h5>Ketsarin Khunram</h5>
              <a href="https://m.me/ketsarin.khunram.7">Send a message</a>
            </article>
          </Fade>
          <Fade bottom>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>Phone Number</h4>
              <h5>0952291742</h5>
              <a href="tel:+66952291742">Call</a>
            </article>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
