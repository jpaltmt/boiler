import React from "react";
import styled from "@emotion/styled";
import Square from "./Square";
import Knight from "./Knight";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface BoardProps {
  knightPosition: [number, number];
}

function renderSquare(
  i: number,
  [knightX, knightY]: BoardProps["knightPosition"]
) {
  const col = i % 8;
  const row = Math.floor(i / 8);
  const isKnightHere = col === knightX && row === knightY;
  const black = (col + row) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <Square key={i} {...{ black }}>
      {piece}
    </Square>
  );
}

export default function Board({ knightPosition }: BoardProps) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Wrapper>{squares}</Wrapper>;
    </DndProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
