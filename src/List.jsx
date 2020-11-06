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

  const { list, rerender } = context;
  const [listValue, setList] = list;
  const [rerendreValue, setRerender] = rerender;

  const handleCompleted = (element, index) => {
    let newElement = element;
    let newList = listValue;
    newElement.isComplete = !element.isComplete;
    newList[index] = newElement;
    setList(newList);
    setRerender(true);
  };

  const handleDelete = (index) => {
    let newList = listValue;
    const removed = newList.splice(index, 1);
    setList(newList);
    setRerender(true);
  };

  return (
    <div>
      {listValue.map((el, index) => {
        console.log(el);
        return (
          <div key={index}>
            <H3 complete={el.isComplete}>{el.todo}</H3>
            <button
              onClick={() => {
                handleCompleted(el, index);
              }}
            >
              complete
            </button>
            <button
              onClick={() => {
                handleDelete(index);
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
