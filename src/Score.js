import React, { useContext } from "react";
import { PlayerContext } from "./playerContext";

const Score = (props) => {
  const {  handleNum, handleSubmit } = useContext(PlayerContext);
  return (
    <>
      <input
        // name={props.name}
        value={props.value}
        onChange={handleNum}
        type="number"
      />
      <br />
      <button name={props.name} onClick={handleSubmit}>
        Add
      </button>
    </>
  );
};
export default Score;
