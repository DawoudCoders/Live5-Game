import React, { useState } from "react";
import resetNumbers from "../Util/resetNumbers";
import NumberDisplay from "./NumberDisplay";

function Manual({ numbers, setNumbers, draw }) {
  const [number, setNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      //spereate this logic out into a function that returns true/false?
      numbers.length < 6 &&
      number < 60 &&
      number > -1 &&
      !numbers.includes(parseInt(number, 10)) 
    ) {
      setNumbers((numbers) => {
        let arr = [...numbers];
        arr.push(parseInt(number, 10));
        setNumber("");
        return arr;
      });
    }
  }

  function handleChange(e) {
    setNumber(e.target.value);
  }

  return (
    <div>
      <p>Please pick 6 numbers from 1-59</p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number here
          <input
            type="text"
            placeholder="Chose your number here"
            value={number}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </label>
      </form>
      <div>
        <button
          onClick={() => {
            resetNumbers(setNumbers);
          }}
        >
          Reset Numbers
        </button>
      </div>
      <div>
        <p>Current Numbers:</p>
        <ul>
          {numbers.map((number) => {
            return <li>{number}</li>;
          })}
        </ul>
      </div>
      <NumberDisplay draw={draw} />
    </div>
  );
}

export default Manual;
