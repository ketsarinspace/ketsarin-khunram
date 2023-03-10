import React from "react";
import "./header.css";
import CTA from "./CTA";
// import ME from "../../assets/joy2.png";
import HeaderSocials from "./HeaderSocials";

import Typed from "react-typed";
const textLines = [
  "Ketsarin Khunram",
  "Front-end Developer",
  "Back-end Developer",
  "Full Stack Developer",
];
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
          <span className="textLine">
            <Typed
              strings={textLines}
              typeSpeed={100}
              backSpeed={100}
              loop={true}
            />
          </span>
        </h1>
        {/* <h5 className="text-light">Fullstack Developer</h5> */}
        <CTA />
        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
