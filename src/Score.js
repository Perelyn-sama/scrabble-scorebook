import React, { useContext } from "react";
import { PlayerContext } from "./playerContext";

const Score = () => {
  const { inputRef, handleNum, num, handleSubmit, arr } = useContext(
    PlayerContext
  );

  return (
    <>
      <input
        ref={inputRef}
        name="num"
        value={num}
        onChange={handleNum}
        type="number"
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      {arr.map(e => (
        <p>{e}</p>
      ))}
    </>
  );
};
export default Score;
