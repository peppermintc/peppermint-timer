import React, { useState, useEffect } from "react";
import styles from "./clock.module.css";

const Clock = ({ minute }) => {
  const [minutes, setMinutes] = useState(minute);
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          // Timer Finish
          clearInterval(countdown);
          console.log("finish");
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div className={styles.time}>
      {minutes}:{seconds}
    </div>
  );
};

export default Clock;
