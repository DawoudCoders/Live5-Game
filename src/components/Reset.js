import React from "react";

import gameReset from "../Util/gameReset";

function Reset({ setStart, setNumbers, setErr, setDraw, setGameMode }) {
  return (
    <div>
      <button
        onClick={() => {
          gameReset(setStart, setNumbers, setErr, setDraw, setGameMode);
        }}
      >
        Reset Game
      </button>
    </div>
  );
}

export default Reset;
