import React, { useState } from "react";
const PlayerContext = React.createContext();

const PlayerContextProvider = (props) => {
  const P1 = {
    num: "",
    arr: [],
  };
  const P2 = {
    num: "",
    arr: [],
  };
  const P3 = {
    num: "",
    arr: [],
  };
  const P4 = {
    num: "",
    arr: [],
  };

  const [player1, setPlayer1] = useState(P1);
  const [player2, setPlayer2] = useState(P2);
  const [player3, setPlayer3] = useState(P3);
  
  const [player4, setPlayer4] = useState(P4);
  const [currentPal, setCurrentpal] = useState([true, false, false, false]);

  const handleNum = (e) => {
    const { value } = e.target;
    setPlayer1({ ...player1, num: value });
    setPlayer2({ ...player1, num: value });
    setPlayer3({ ...player1, num: value });
    setPlayer4({ ...player1, num: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name === "player1" && Number(player1.num) !== 0) {
      setPlayer1({
        ...player1,
        arr: [...player1.arr, Number(player1.num)],
        num: "",
      });
      setCurrentpal([false, true, false, false]);
    } else if (e.target.name === "player2" && Number(player2.num) !== 0) {
      setPlayer2({
        ...player2,
        arr: [...player2.arr, Number(player2.num)],
        num: "",
      });
      setCurrentpal([false, false, true, false]);
      console.log("This is playeer two turn");
    } else if (e.target.name === "player3" && Number(player3.num) !== 0) {
      setPlayer3({
        ...player3,
        arr: [...player3.arr, Number(player3.num)],
        num: "",
      });
      setCurrentpal([false, false, false, true]);
    } else if (e.target.name === "player4" && Number(player4.num) !== 0) {
      setPlayer4({
        ...player4,
        arr: [...player4.arr, Number(player4.num)],
        num: "",
      });
      setCurrentpal([true, false, false, false]);
    }
  };

  const contextVals = {
    player1,
    player2,
    player3,
    player4,
    currentPal,
    handleNum,
    handleSubmit,
  };

  return (
    <PlayerContext.Provider value={contextVals}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider, PlayerContext };
