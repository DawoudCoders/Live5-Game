import React, { useEffect, useState } from "react";
import randomNumberGen from "../Util/randomNumberGen";
import NumberDisplay from "./NumberDisplay";

function Lucky({ numbers, setNumbers, draw }) {
  useEffect(() => {
    setNumbers(randomNumberGen());
  }, []);

  return (
    <div>
      <p>Your numbers:</p>
      <ul>
        {numbers.map((number) => {
          return <li>{number}</li>;
        })}
      </ul>
      <NumberDisplay draw={draw} />
    </div>
  );
}

export default Lucky;
