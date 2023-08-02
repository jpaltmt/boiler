import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";

function App() {
  // CHESS BOARD
  return (
    <div className="App">
      <Board knightPosition={[0, 0]} />
    </div>
  );
}

export default App;
