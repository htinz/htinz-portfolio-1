import React from "react";
import Typical from "react-typical";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h2>Htin Zaw</h2>
        <h5 className="text-light">Junior Front End Developer</h5>

        <div className="typical-details">
          <span className="typical-text">
            {" "}
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Hyper Text Markup Language 😎",
                  1000,
                  "Cascading Style Sheets ⛏",
                  1000,
                  "JavaScript 📱",
                  1000,
                  "React 💻",
                  1000,
                ]}
              />
            </h1>
          </span>
        </div>

        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="Ooops ... not found image" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
