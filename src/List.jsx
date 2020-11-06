import React from "react";
import styled from "styled-components";

const H3 = styled.h3`

${({complete})=>{
    if(complete){
        return`
        text-decoration: line-through
        `
    }
}}
`

export default function List(props) {
  const { list, completed, fDelete } = props;
  return (
    <div>
      {list.map((el, key) => {
          console.log(el)
        return (
          <div key={key}>
            <H3 complete={el.isComplete}>{el.todo}</H3>
            <button onClick={()=>{completed(el, key)}}>complete</button>
            <button onClick={() => {fDelete(key)}}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
