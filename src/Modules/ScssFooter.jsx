import React from "react";
import Style from "../Modules/ScssFooter.module.scss";
import js from "../FooterAssets/JS.png";
import Ang from "../FooterAssets/Ang.png";
import Reactimg from "../FooterAssets/React.png";
import Vue from "../FooterAssets/Vue.png";

const ScssFooter = () => {
  return (
    <footer className={Style.myFooter}>
      <div className={Style.Maindiv}>
        <section>
          <img src={js} alt='' />
          <div className={Style.block}>
            <p>Java Script</p>
          </div>
        </section>
        <section>
          <img src={Reactimg} alt='' />
          <div className={Style.block}>
            <p>React</p>
          </div>
        </section>
        <section>
          <img src={Ang} alt='' />
          <div className={Style.block}>
            <p>Angular Js</p>
          </div>
        </section>
        <section>
          <img src={Vue} alt='' />
          <div className={Style.block}>
            <p>Vue Js</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default ScssFooter;
