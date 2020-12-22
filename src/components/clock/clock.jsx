import React, { useState, useEffect } from "react";
import styles from "./clock.module.css";
import alarm from "../../sounds/alarm.mp3";

const Clock = ({ minute, leftTimeChange }) => {
  const [minutes, setMinutes] = useState(minute);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      leftTimeChange(seconds + minutes * 60);

      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          // Timer Finish
          clearInterval(countdown);
          console.log("finish");
          // Alarm
          var audio = new Audio();
          audio.src = { alarm };
          audio.play();
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
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Clock;
