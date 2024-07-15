import React from "react";
import Style from "../Modules/ScssFooter.module.scss";
import js from "../FooterAssets/JS.png";
import Ang from "../FooterAssets/Ang.png";
import Reactimg from "../FooterAssets/React.png";
import Vue from "../FooterAssets/Vue.png";
import js1 from "../FooterAssets/Js1.svg";
import Ang1 from "../FooterAssets/Ang.svg";
import Reactimg1 from "../FooterAssets/React1.svg";
import Vue1 from "../FooterAssets/Vue.svg";

const ScssFooter = ({ isLight, setIsLight }) => {
  return (
    <footer className={isLight ? Style.myFooter : Style.myFooter1}>
      <div className={Style.Maindiv}>
        <section>
          <img src={isLight ? js : js1} alt='' />
          <div className={Style.block}>
            <p>Java Script</p>
          </div>
        </section>
        <section>
          <img src={isLight ? Reactimg : Reactimg1} alt='' />
          <div className={Style.block}>
            <p>React</p>
          </div>
        </section>
        <section>
          <img src={isLight ? Ang : Ang1} alt='' />
          <div className={Style.block}>
            <p>Angular Js</p>
          </div>
        </section>
        <section>
          <img src={isLight ? Vue : Vue1} alt='' />
          <div className={Style.block}>
            <p>Vue Js</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default ScssFooter;
