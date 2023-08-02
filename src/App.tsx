import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import { Button } from "@mui/material";

// generate random position
export function observe(): [number, number] {
  const randPos = () => Math.floor(Math.random() * 8);
  return [randPos(), randPos()];
}

function App() {
  const [knightPosition, setKnightPosition] = useState<[number, number]>([
    0, 0,
  ]);
  // CHESS BOARD
  return (
    <div className="App">
      <div style={{ width: "100%", background: "#42a5f58a" }}>
        <Button
          variant="contained"
          sx={{ margin: 1 }}
          onClick={() => setKnightPosition(observe())}
        >
          Randomize Position
        </Button>
      </div>
      <Board {...{ knightPosition }} />
    </div>
  );
}

export default App;
