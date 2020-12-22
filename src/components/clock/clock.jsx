import React, { useState } from "react";

const Clock = (props) => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  return (
    <div>
      {minute}:{second}
    </div>
  );
};

export default Clock;
