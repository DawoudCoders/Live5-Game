import resetNumbers from "./resetNumbers";

function gameReset(
  setStart,
  setNumbers,
  setErr,
  setDraw = null,
  setGameMode = null
) {
  setStart(false);
  resetNumbers(setNumbers);
  setErr(false);
  if (setDraw != null) setDraw([]);
  if (setGameMode != null) setGameMode("");
}

export default gameReset;
