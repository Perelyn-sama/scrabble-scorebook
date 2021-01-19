import React, { useContext } from "react";
import { PlayerContext } from "./playerContext";

import "./style.css";

import Header from "./Header";
import Score from "./Score";
import Timer from "./Timer";

export default function App() {
  const { currentPal, player1, player2, player3, player4 } = useContext(
    PlayerContext
  );
  return (
    <div>
      <div style={{ display: currentPal[0] ? "" : "none" }}>
        <Header player={1} />
        <Score player={1} value={player1.num} name="player1" />
      </div>
      <div style={{ display: currentPal[1] ? "" : "none" }}>
        <Header player={2} />
        <Score player={2} value={player2.num} name="player2" />
      </div>
      <div style={{ display: currentPal[2] ? "" : "none" }}>
        <Header player={3} />
        <Score player={3} value={player3.num} name="player3" />
      </div>
      <div style={{ display: currentPal[3] ? "" : "none" }}>
        <Header player={4} />
        <Score player={4} value={player4.num} name="player4" />
      </div>
      <br />
      <br />
      <p>Player 1 has {player1.arr.reduce((a, v) => a + v, 0)} points </p>
      <p>Player 2 has {player2.arr.reduce((a, v) => a + v, 0)} points </p>
      <p>Player 3 has {player3.arr.reduce((a, v) => a + v, 0)} points </p>
      <p>Player 4 has {player4.arr.reduce((a, v) => a + v, 0)} points </p>

      <Timer />
    </div>
  );
}
