import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscRootFolder } from "react-icons/vsc";
import { useState } from "react";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>0+ Years Working </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscRootFolder className="about__icon" />
              <h5>Projects</h5>
              <small>0+ Completed </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni
            perferendis necessitatibus? Neque est libero consequatur, iusto
            quidem nesciunt doloremque recusandae blanditiis pariatur? Ducimus
            necessitatibus iste in quaerat accusamus optio.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
