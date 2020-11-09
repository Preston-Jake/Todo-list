import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./Store";

const H3 = styled.h3`
  ${({ complete }) => {
    if (complete) {
      return `
        text-decoration: line-through
        `;
    }
  }}
`;

export default function List() {
  const context = useContext(AppContext);
  const { dispatch, state } = context;
  return (
    <div>
      {state.list.map((el, i) => {
        return (
          <div key={i}>
            <H3 complete={el.isComplete}>{el.todo}</H3>
            <button
              onClick={() => {
                dispatch({ type: "onToggle", index: i });
              }}
            >
              complete
            </button>
            <button
              onClick={() => {
                dispatch({ type: "onDelete", index: i });
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
