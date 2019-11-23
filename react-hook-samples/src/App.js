import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Parent } from "./samples/StateSample";

function App() {
  return (
    <div className="App">
      Sample I
      <StateSample />
      <hr />
      Sample II
      <Parent />
    </div>
  );
}

export default App;
