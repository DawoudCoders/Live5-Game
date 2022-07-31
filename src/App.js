import Result from "./components/Result";
import Picker from "./components/Picker";
import Start from "./components/Start";
import Reset from "./components/Reset";
import Manual from "./components/Manual";
import Lucky from "./components/Lucky";
import React, { useState } from "react";

function App() {
  const [start, setStart] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [draw, setDraw] = useState([]);
  const [err, setErr] = useState(null);
  const [gameMode, setGameMode] = useState("");

  return (
    <div>
      <h1>Lucky Draw</h1>
      <Picker
        gameMode={gameMode}
        setGameMode={setGameMode}
        setStart={setStart}
        setNumbers={setNumbers}
        setErr={setErr}
      />
      {gameMode === "manual" && (
        <Manual numbers={numbers} setNumbers={setNumbers} draw={draw} />
      )}
      {gameMode === "lucky" && (
        <Lucky numbers={numbers} setNumbers={setNumbers} draw={draw} />
      )}
      <Start
        start={start}
        setStart={setStart}
        numbers={numbers}
        err={err}
        setErr={setErr}
        setDraw={setDraw}
        gameMode={gameMode}
      />
      {start && <Result numbers={numbers} draw={draw} />}
      <Reset
        setStart={setStart}
        setNumbers={setNumbers}
        setErr={setErr}
        setDraw={setDraw}
        setGameMode={setGameMode}
      />
    </div>
  );
}

export default App;
