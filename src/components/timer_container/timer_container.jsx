import React, { useState } from "react";
import Clock from "../clock/clock";
import StartButton from "../start_button/start_button";
import styles from "./timer_container.module.css";

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
    <div className={styles.timer_container}>
      {startClicked && <Clock />}
      {startClicked && <div>Progressive Bar</div>}
      {!startClicked && <StartButton toggleStart={toggleStart} />}
      {startClicked && (
        <button onClick={() => toggleStart()}>Return to home</button>
      )}
    </div>
  );
};

export default TimerContainer;
