import React, { useState } from "react";

function App() {
  const [mouseOver, setMouseOver] = useState(false);
  function over() {
    setMouseOver(true);
  }
  function out() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={
          mouseOver
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
        onMouseOver={over}
        onMouseOut={out}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
