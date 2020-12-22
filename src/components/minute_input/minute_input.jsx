import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./minute_input.module.css";

export default function MinuteInput({ minuteChange, onButtonClick }) {
  const [value, setValue] = useState(0);

  const handleChange = async (event) => {
    await setValue(event.target.value);
  };

  useEffect(() => {
    minuteChange(value);
  }, [value]);

  return (
    <div className={styles.container}>
      <TextField
        onChange={(event) => handleChange(event)}
        id="standard-textarea"
        placeholder="Minutes"
        multiline
        inputProps={{
          style: {
            fontSize: 36,
            height: 45,
            textAlign: "center",
            padding: "16px 14px",
            boxSizing: "border-box",
          },
        }}
        margin="normal"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            onButtonClick();
          }
        }}
      />
    </div>
  );
}
