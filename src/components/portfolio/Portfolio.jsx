import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/air-quality-visualizer.png";
import IMG2 from "../../assets/countdown-new-year.png";
import IMG3 from "../../assets/to-do-list.png";
import IMG4 from "../../assets/voice-images.png";
import IMG5 from "../../assets/text-to-speech.png";

import Fade from "react-reveal/Fade";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Air Quality Visualizer",
    github: "https://github.com/ketsarinspace/air-quality-visualizer",
    demo: "https://ketsarinspace.github.io/air-quality-visualizer/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Countdown New Year",
    github: "https://github.com/ketsarinspace/countdown-new-year",
    demo: "https://ketsarinspace.github.io/countdown-new-year",
  },

  {
    id: 3,
    image: IMG3,
    title: "To-Do List",
    github: "https://github.com/ketsarinspace/To-Do-List-React-App-1",
    demo: "https://ketsarinspace.github.io/To-Do-List-React-App-1",
  },
  {
    id: 4,
    image: IMG4,
    title: "Voice Images",
    github: "https://github.com/ketsarinspace/voice-images",
    demo: "https://ketsarinspace.github.io/voice-images",
  },
  {
    id: 5,
    image: IMG5,
    title: "Text to Speech",
    github: "https://github.com/ketsarinspace/text-to-speech-js",
    demo: "https://ketsarinspace.github.io/text-to-speech-js",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <Fade bottom>
              <article key={id} className="portfolio__item ">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" tartget="_blank">
                    Github
                  </a>

                  <a href={demo} className="btn btn-white" tartget="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            </Fade>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
