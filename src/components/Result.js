import React, { useState, useEffect } from "react";
import randomNumberGen from "../Util/randomNumberGen";

function Result({ numbers, draw }) {
  //const [matches, setMatches] = useState(0);
  //const [score, setScore] = useState(0);

  let matches1 = 0;
  let score = 0;

  // function matchIncrease() {
  //   // setMatches((matches) => {
  //   //   return matches + 1;
  //   // });
  // }

  for (let i = 0; i < draw.length; i++) {
    if (numbers.includes(parseInt(draw[i]))) {
      matches1++;
    }
  }

  if (matches1 === 3) {
    score = 50;
  } else if (matches1 === 4) {
    score = 100;
  } else if (matches1 === 5) {
    score = 200;
  } else if (matches1 === 6) {
    score = 500;
  }

  return (
    <div>
      Results: {score} ({matches1} matches)
    </div>
  );
}

export default Result;
