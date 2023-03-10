// react download file CV

import React from "react";
import CV from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn-header btn-white">
        Download CV
      </a>
      <a href="#contact" className="btn-header  btn-white">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
