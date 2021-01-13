import React from "react";
import useTimer from "./useTimer";

const Timer = () => {
  const [mins, sec, start] = useTimer();

  return (
    <div id="start">
      <p>
        {mins}:{sec}{" "}
      </p>
      <button onClick={start}>✔</button>
    </div>
  );
};

export default Timer;
