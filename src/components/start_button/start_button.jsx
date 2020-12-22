import React from "react";
import styles from "./start_button.module.css";
import stopwatch from "../../images/stopwatch2.png";

const StartButton = ({ toggleStart }) => {
  return (
    <button className={styles.start_button} onClick={() => toggleStart()}>
      <img src={stopwatch} alt="stopwatch" />
      <span className={styles.text}>START</span>
    </button>
  );
};

export default StartButton;
