import React, { useState, useRef } from "react";
const PlayerContext = React.createContext();

const PlayerContextProvider = props => {
  const P1 = {
    num: null,
    arr: []
  };

  const [player1, setPlayer1] = useState(P1);

  const inputRef = useRef(null);
  const [num, setNum] = useState();
  const [arr, setArr] = useState([]);

  const handleNum = e => {
    const { value } = e.target;
    setNum(value);
    setPlayer1({ ...player1, num: value });
  };

  console.log(player1);

  const handleSubmit = e => {
    e.preventDefault();
    setArr(p => {
      p.push(num);
      return p;
    });
    setPlayer1({ ...player1, arr: arr.push(num) });
    setNum("");
    inputRef.current.focus();
  };
  const contextVals = { inputRef, handleNum, num, handleSubmit, arr };
  return (
    <PlayerContext.Provider value={contextVals}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider, PlayerContext };
