import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Garage from "./components/Garage";

function App() {
  const displayAlert = ()=> {
    window.alert("Hello World");
  }
  return (
    <>
      <h1>Hello World</h1>
      <h2>I am H2</h2>
      <button onClick={displayAlert}>I am button</button>
    </>
  );
}

export default App;
