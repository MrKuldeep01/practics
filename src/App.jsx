import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Colorbtn from "./components/colorbtn.jsx";
function App() {
  return (
    <>
      <div className="background">
        <ul className="colortab">
          <Colorbtn colorname={"deepPink"} />
          <Colorbtn colorname={"royalBlue"} />
          <Colorbtn colorname={"gray"} />
          <Colorbtn colorname={"burlywood"} />
          <Colorbtn colorname={"cadetblue"} />
          <Colorbtn colorname={"chocolate"} />
          <Colorbtn colorname={"coral"} />
          <Colorbtn colorname={"crimson"} />
          <Colorbtn colorname={"cyan"} />
          <Colorbtn colorname={"darkgreen"} />
          <Colorbtn colorname={"skyBlue"} />
          <Colorbtn colorname={"salmon"} />
          <Colorbtn colorname={"aqua"} />
          <Colorbtn colorname={"coral"} />
          <Colorbtn colorname={"maroon"} />
        </ul>
        <h2 className="heading">Click buttons to flip Background</h2>
      </div>
    </>
  );
}

export default App;
