import React from "react";
import sun from "../Assets/Sun.png";
import Style from "../Modules/ScssHeader.module.scss";

const ScssHeader = () => {
  return (
    <header className={Style.myHeader}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Content</li>
      </ul>
      <div>
        <img src={sun} alt='' />
      </div>
    </header>
  );
};

export default ScssHeader;
