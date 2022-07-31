import React from "react";

function NumberDisplay({draw}) {
  return (
    <div>
        The numbers drawn:
      <ul>
        {draw.map((number) => {
          return <li>{number}</li>;
        })}
      </ul>
    </div>
  );
}

export default NumberDisplay;
