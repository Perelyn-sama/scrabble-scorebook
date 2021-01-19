import { useState } from "react";

const useTimer = () => {
  const STARTING_MINS = 1;
  const STARTING_SECS = 0;

  let [sec, setSec] = useState(STARTING_SECS);
  let [mins, setMins] = useState(STARTING_MINS);
  // eslint-disable-next-line no-unused-vars
  let [miliSec, setmilisec] = useState(STARTING_MINS * 60 * 1000);

  const start = () => {
    const innerFunc = () => {
      let timeleft = (miliSec - 1) % 60;
      if (timeleft > -1) {
        miliSec--;
        // eslint-disable-next-line no-unused-expressions
        timeleft === 59 ? setMins(prevstate => prevstate - 1) : timeleft;
        setSec(timeleft);
      }
      setSec(timeleft);
    };
    const intervalId = setInterval(innerFunc, 1000);
    return () => clearInterval(intervalId);
  };

  const formatedMins = mins < 10 ? "0" + mins : mins;

  const formatedSecs = sec < 10 ? "0" + sec : sec;

  return [formatedMins, formatedSecs, start];
};

export default useTimer;
