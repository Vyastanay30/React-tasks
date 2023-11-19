import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var currentYear = 2021;
  const [birthYear, setbirthYear] = useState(0);
  const [age, setAge] = useState(0);

  function clickHandler() {
    var theAge = currentYear - birthYear;
    setAge(theAge);
  }

  function inputChangeHandler(e) {
    setbirthYear(e);
  }

  return (
    <div className="App">
      <h1>React Age Calculator</h1>
      <h2>Enter Your birth-date to reveal your age!</h2>
      <input onChange={(e) => inputChangeHandler(e.target.value)} />
      <div>
        {" "}
        <button onClick={clickHandler}>Submit</button>
      </div>

      <div>The age is: {age}</div>
    </div>
  );
}
