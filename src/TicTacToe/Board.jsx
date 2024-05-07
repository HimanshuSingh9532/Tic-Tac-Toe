import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXTurn] = useState(true);

  const checkwinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] == state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const iswinner = checkwinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }

    const copyState = [...state];
    copyState[index] = isXturn ? " 0 " : "× ";
    setState(copyState);
    setIsXTurn(!isXturn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {iswinner ? (
        <>
          {iswinner} won the game{" "}
          <button onClick={handleReset}>Play Again</button>{" "}
        </>
      ) : (
        <>
          <h4> {isXturn ? " Player-1" : "Player-2"} Please Move</h4>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}

      <>
        <br />
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          When Winner is not decided please click button & play Again{" "}
        </span>
        <br />
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={handleReset}>Rematch</button>
        </h3>
      </>
    </div>
  );
}

export default Board;
