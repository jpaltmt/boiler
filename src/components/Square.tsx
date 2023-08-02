import styled from "@emotion/styled";
import React, { ReactNode } from "react";

export default function Square({
  black,
  children,
}: {
  black?: boolean;
  children: ReactNode;
}) {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";

  return (
    <Wrapper {...{ fill }} {...{ stroke }}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ fill: string; stroke: string }>`
  display: flex;
  background-color: ${({ fill }) => fill};
  color: ${({ stroke }) => stroke};
  width: 12.5%;
  height: 100px;
`;
