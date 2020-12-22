import React, { useState } from "react";
import Clock from "../clock/clock";
import StartButton from "../start_button/start_button";
import styles from "./timer_container.module.css";
import TimeSelector from "../time_selector/time_selector";

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
      {!startClicked ? (
        <StartButton toggleStart={toggleStart} />
      ) : (
        <TimeSelector />
      )}

      {/* {startClicked && <Clock />}
      {startClicked && <div>Progressive Bar</div>}
      {startClicked && (
        <button onClick={() => toggleStart()}>Return to home</button>
      )} */}
    </div>
  );
};

export default TimerContainer;
