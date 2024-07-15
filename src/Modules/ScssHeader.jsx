import React from "react";
import sun from "../Assets/Sun.png";
import Style from "../Modules/ScssHeader.module.scss";
import moon from "../Assets/Vector.svg";

const ScssHeader = ({ isLight, setIsLight }) => {
  console.log(isLight);
  return (
    <header className={isLight ? Style.myHeader : Style.myHeader1}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Content</li>
      </ul>
      <div onClick={() => setIsLight((prev) => !prev)}>
        <img src={isLight ? sun : moon} alt='' />
      </div>
    </header>
  );
};

export default ScssHeader;
