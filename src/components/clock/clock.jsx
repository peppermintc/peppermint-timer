import React, { useState } from "react";
import styles from "./clock.module.css";

const Clock = ({ minute, second }) => {
  //   const [minute, setMinute] = useState(0);
  //   const [second, setSecond] = useState(0);

  return (
    <div className={styles.time}>
      {minute}:{second}
    </div>
  );
};

export default Clock;
