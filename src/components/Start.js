import React, { useState, useEffect } from "react";
import randomNumberGen from "../Util/randomNumberGen";

function Start({ start, setStart, numbers, err, setErr, setDraw, gameMode }) {
  return (
    <div>
      <button
        onClick={() => {
          if (numbers.length === 6) {
            setStart(true);
            setErr(false);
            setDraw(randomNumberGen());
          } else if (gameMode === "manual" && numbers.length != 6) {
            setErr(true);
          }
        }}
      >
        Start
      </button>
      {err === true && <p>You must chose 6 numbers to start the game!</p>}
    </div>
  );
}

export default Start;
