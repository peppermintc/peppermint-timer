import React from "react";
import { Button } from "react-bootstrap";
import styles from "./time_selector.module.css";
import MinuteInput from "../minute_input/minute_input";

const TimeSelector = (props) => {
  return (
    <div className={styles.container}>
      <h2>How many minutes are you going to focus?</h2>
      <div className={styles.input_container}>
        <MinuteInput />
        <div className={styles.startTimerButton}>
          <Button variant="outline-success">Start Timer</Button>
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;
