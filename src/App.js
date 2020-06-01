import React from "react";
import "./App.css";

import Converter from "./components/Converter";

function App() {
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <Converter />
      </div>{" "}
    </div>
  );
}

export default App;
