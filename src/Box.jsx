import React from 'react';

//Component Function to obtain props from Board component and display the current value.
export function Box(props) {
  return (
    <button onClick={props.onClick}>
      {props.value}
    </button>
  );  
}


