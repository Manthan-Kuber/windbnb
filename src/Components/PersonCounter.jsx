import React from "react";
import { CounterButton, CounterInput, CounterWrapper } from "./Header.styles";

const PersonCounter = (props) => {
  return (
    <CounterWrapper>
      <h4>{props.children}</h4>
      <label>{props.label}</label>
      <CounterButton>+</CounterButton>
      <CounterInput type='number'  />
      <CounterButton>-</CounterButton>
    </CounterWrapper>
  );
};

export default PersonCounter;
