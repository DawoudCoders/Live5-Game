import React from "react";
import gameReset from "../Util/gameReset";

function Picker({ gameMode, setGameMode, setStart, setNumbers, setErr }) {
  if (gameMode === "") {
    return (
      <div>
        Choose game mode:
        <button
          onClick={() => {
            setGameMode("manual");
            gameReset(setStart, setNumbers, setErr);
          }}
        >
          Manual
        </button>
        <button
          onClick={() => {
            setGameMode("lucky");
            gameReset(setStart, setNumbers, setErr);
          }}
        >
          Lucky
        </button>
      </div>
    );
  }
  if (gameMode !== "") {
    return <div> Game mode: {gameMode}</div>;
  }
}

export default Picker;
