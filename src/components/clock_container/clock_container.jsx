import React from "react";
import Clock from "../clock/clock";
import styles from "./clock_container.module.css";
import { ProgressBar } from "react-bootstrap";

const ClockContainer = ({ minute }) => {
  const now = 60;
  return (
    <div className={styles.container}>
      <Clock minute={minute} />
      <hr></hr>
      <ProgressBar className={styles.progress} now={now} label={`${now}%`} />
    </div>
  );
};

export default ClockContainer;
