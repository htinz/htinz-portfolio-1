import React from "react";
import './services.css';
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
          </ul>
        </article>
        {/* ***********END of UI/UX ***********/}
        <article className="service">
          <div className="service__head">
            <h3>Wed Develoment</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
          </ul>
        </article>
        {/* **********END of Web Development  */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, vero.{" "}
              </p>
            </li>
          </ul>
        </article>
        {/* ********* END of Content Creation */}
      </div>
    </section>
  );
};

export default Services;
