import React, { useState } from "react";
import Header from "./Modules/ScssHeader";
import Main2 from "./Modules/ScssMain";
import Footer from "./Modules/ScssFooter";

const App = () => {
  const [isLight, setIsLight] = useState(false);
  return (
    <>
      <Header isLight={isLight} setIsLight={setIsLight} />
      <Main2 isLight={isLight} setIsLight={setIsLight} />
      <Footer isLight={isLight} setIsLight={setIsLight} />
    </>
  );
};

export default App;
