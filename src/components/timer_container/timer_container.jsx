import React, { useState } from "react";
import styles from "./timer_container.module.css";
import StartButton from "../start_button/start_button";
import TimeSelector from "../time_selector/time_selector";
import ClockContainer from "../clock_container/clock_container";

const TimerContainer = (props) => {
  const [startClicked, setStartClicked] = useState(false);
  const [minute, setMinute] = useState(0);
  const [timeSet, setTimeSet] = useState(false);
  const [second, setSecond] = useState(0);

  const toggleStart = () => {
    if (startClicked === true) {
      setStartClicked(false);
    } else {
      setStartClicked(true);
    }
  };

  const setTimer = async (minute) => {
    await setMinute(minute);
    setTimeSet(true);
  };

  return (
    <div className={styles.timer_container}>
      {!startClicked && <StartButton toggleStart={toggleStart} />}
      {startClicked && !timeSet ? <TimeSelector setTimer={setTimer} /> : null}
      {timeSet && <ClockContainer minute={minute} second={second} />}
    </div>
  );
};

export default TimerContainer;
