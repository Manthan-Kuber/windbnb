import React from "react";
import { CounterButton, CounterInput, CounterWrapper } from "./Header.styles";

const PersonCounter = (props) => {
  return (
    <CounterWrapper>
      <h4>{props.children}</h4>
      <label>{props.label}</label>
      <div>
        <CounterButton onClick={props.handleIncrement}>+</CounterButton>
        <CounterInput
          type="number"
          name={props.name}
          readOnly
          value={props.value}
        />
        <CounterButton onClick={props.handleDecrement}>-</CounterButton>
      </div>
    </CounterWrapper>
  );
};

export default PersonCounter;
