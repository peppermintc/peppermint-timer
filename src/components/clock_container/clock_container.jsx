import React from "react";
import Clock from "../clock/clock";
import styles from "./clock_container.module.css";

const ClockContainer = ({ minute }) => {
  return (
    <div className={styles.container}>
      <Clock minute={minute} />
      Progressive Bar
    </div>
  );
};

export default ClockContainer;
