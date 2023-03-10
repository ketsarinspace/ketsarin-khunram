/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

import { useState } from "react";
const Nav = () => {
  const [activeNev, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNev === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      {/* #about คือเชื่อต่อกับ id ที่มีชื่อว่า about */}
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNev === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNev === "#experience" ? "active" : ""}
      >
        <GiSkills />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNev === "#portfolio" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNev === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
