import React from "react";
import Clock from "../clock/clock";

const TimerContainer = (props) => (
  <div className="timer_container">
    <Clock />
    <div>Progressive Bar</div>
    <div>Buttons</div>
  </div>
);

export default TimerContainer;
