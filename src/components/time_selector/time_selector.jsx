import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./time_selector.module.css";
import MinuteInput from "../minute_input/minute_input";

const TimeSelector = ({ setTimer }) => {
  const [minute, setMinute] = useState(0);

  const onButtonClick = () => {
    if (Math.sign(minute) === 1) {
      setTimer(minute);
    }
  };

  const minuteChange = (minute) => {
    setMinute(minute);
  };

  return (
    <div className={styles.container}>
      <h2>How many minutes are you going to focus?</h2>
      <div className={styles.input_container}>
        <MinuteInput minuteChange={minuteChange} />
        <div className={styles.startTimerButton}>
          <Button onClick={onButtonClick} variant="outline-success">
            Start Timer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;
