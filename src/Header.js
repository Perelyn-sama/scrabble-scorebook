import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>Scrabble ScoreBook</h1>
      <h2>Player {props.player}, What's your score?</h2>
    </div>
  );
};
export default Header;
