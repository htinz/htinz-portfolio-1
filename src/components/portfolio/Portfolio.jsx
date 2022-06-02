import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboards & Financial Visualization",
    github: "https://github.com/htingithub",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com/htingithub",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com/htingithub",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    image: IMG4,
    title: "Mataining tasks and tracking progress",
    github: "https://github.com/htingithub",
    demo: "https://dribbble.com/shots/16955822-Mataining-tasks-and-tracking-progress",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com/htingithub",
    demo: "https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com/htingithub",
    demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn__primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

// Notes

// https://dribbble.com/Alien_pixels

{
  /* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project1} alt="IMG" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn__primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project2} alt="IMG" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn__primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project3} alt="IMG" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn__primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project4} alt="IMG" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn__primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project5} alt="IMG" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn__primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project6} alt="IMG" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn__primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article> */
}
