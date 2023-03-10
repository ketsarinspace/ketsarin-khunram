import React from "react";

import { BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/ketsarinspace">
        <BsGithub className="socials__icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;
