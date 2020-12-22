import React from "react";
import styles from "./start_button.module.css";

const StartButton = ({ toggleStart }) => {
  return (
    <button className={styles.start_button} onClick={() => toggleStart()}>
      <img src="/images/stopwatch2.png" alt="stopwatch" />
      <span className={styles.text}>START</span>
    </button>
  );
};

export default StartButton;
