import React, { useState } from "react";
import Clock from "../clock/clock";

const TimerContainer = (props) => {
  const [startClicked, setStartClicked] = useState(false);

  const toggleStart = () => {
    if (startClicked === true) {
      setStartClicked(false);
    } else {
      setStartClicked(true);
    }
    console.log(startClicked);
  };

  return (
    <div className="timer_container">
      {startClicked && <Clock />}
      {startClicked && <div>Progressive Bar</div>}
      {!startClicked && <button onClick={() => toggleStart()}>Start</button>}
      {startClicked && (
        <button onClick={() => toggleStart()}>Return to home</button>
      )}
    </div>
  );
};

export default TimerContainer;
