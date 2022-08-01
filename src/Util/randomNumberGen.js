import React from "react";

function randomNumberGen() {
  let numbers = [];
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 59);
    if (!numbers.includes(random)) {
      numbers.push(random);
    } else {
      i--;
    }
  }
  return numbers;
}

export default randomNumberGen;
