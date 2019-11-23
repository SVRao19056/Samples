import React from "react";
import "./App.css";
import { Parent, StateSample } from "./samples/StateSample";

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
