import React from "react";
import "./about.css";
import ME from "../../assets/joy2.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdLanguage } from "react-icons/md";
import { BsFillKeyboardFill } from "react-icons/bs";

import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <section id="about">
      <h2>About ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutimage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <Fade bottom>
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Year Working</small>
              </article>
            </Fade>
            <Fade bottom>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Project</h5>
                <small>8 project</small>
              </article>
            </Fade>
            <Fade bottom>
              <article className="about__card">
                <MdLanguage className="about__icon" />
                <h5>Language</h5>
                <small>Thai : native</small>
                <br />
                <small>English : Intermediate</small>
              </article>
            </Fade>
            <Fade bottom>
              <article className="about__card">
                <BsFillKeyboardFill className="about__icon" />
                <h5>Typing</h5>
                <small>English : 80 wpm</small>
                <br />
                <small>Thai : 40 wpm</small>
              </article>
            </Fade>
          </div>
          <Fade bottom>
            <p>
              Hi, I’m ketsarin khunram. Now I'm interested in the position of
              front-end development, back-end development, full-stack
              development and I’m looking for new opportunities to prove myself
              and always looking for knowledge by myself and I can find a
              program solution using English.
              <br />I assure you that I will give my best to expand your online
              reach and help you cater for a better online presence across
              different media channels.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
