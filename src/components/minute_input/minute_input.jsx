import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./minute_input.module.css";

export default function MinuteInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <TextField
        onChange={handleChange}
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
        }} // font size of input text
        margin="normal"
      />
    </div>
  );
}
