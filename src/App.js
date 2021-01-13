import React, { useState, useRef } from "react";
import "./style.css";

import Header from "./Header";
import Score from "./Score";
import Timer from "./Timer";

export default function App() {
  return (
    <div>
      <Header player={1} />
      <Score />
      <br />
      <Timer />
    </div>
  );
}
// <Header player={2} />
// <Header player={3} />
// <Header player={4} />
