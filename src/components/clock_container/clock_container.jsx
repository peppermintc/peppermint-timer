import React, { useState, useEffect } from "react";
import Clock from "../clock/clock";
import styles from "./clock_container.module.css";
import { ProgressBar } from "react-bootstrap";

const ClockContainer = ({ minute }) => {
  const [totalTime, setTotalTime] = useState(minute * 60);
  const [leftTime, setLeftTime] = useState(minute * 60);
  const [now, setNow] = useState(leftTime / totalTime);

  const leftTimeChange = (value) => {
    setLeftTime(value);
  };

  useEffect(() => {
    setNow(parseInt(100 - (leftTime / totalTime) * 100));
  }, [leftTime]);

  return (
    <div className={styles.container}>
      <Clock
        minute={minute}
        leftTime={leftTime}
        leftTimeChange={leftTimeChange}
      />
      <hr></hr>
      <ProgressBar
        className={styles.progress}
        min={0}
        max={100}
        now={now}
        label={`${now}%`}
      />
    </div>
  );
};

export default ClockContainer;
