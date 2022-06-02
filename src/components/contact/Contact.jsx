import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_55f9tw9",
      "template_qjdm79m",
      form.current,
      "qlfVy9-WRWPupkNSy"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GoLocation className="contact__option-icon" />
            <h4>Address</h4>
            <h5>London, United Kingdom</h5>
            <a href="https://m.me/htin.zaw.12" target="_blank">
              Contact me
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>htindev@gmail.com</h5>
            <a href="mailto:htinzaw1@gmail.com" target="_blank">
              Email me
            </a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+44-07564035273</h5>
            <a
              href="https://api.whatsapp.com/send?phone+12345688876"
              target="_blank"
            >
              Phone Me
            </a>
          </article>
        </div>
        {/* End of Contact Options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
}
