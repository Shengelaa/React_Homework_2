import React from "react";
import Style from "../Modules/ScssMain.module.scss";
import img from "../Assets/Frame.png";
import man from "../Assets/Man.png";

const ScssMain = ({ isLight, setIsLight }) => {
  return (
    <main className={isLight ? Style.MyMain : Style.MyMain1}>
      <div>
        <h1>Hi, I am</h1>
        <h1>Chukwukwe Chisom</h1>
        <p>Frontend Developer</p>
        <button>Download CV</button>
        <img src={img} alt='' />
      </div>
      <section>
        <img src={man} alt='' />
      </section>
    </main>
  );
};

export default ScssMain;
