import React, { useContext } from "react";
import { ResultsContainer } from "./Header.styles";
import PersonCounter from "./PersonCounter";
import { SearchContext } from "../App";

const GuestsDropdown = () => {
  const searchContext = useContext(SearchContext);
  return (
    <ResultsContainer>
      <PersonCounter
        label={"Ages 13 or above"}
        name={"adultNumber"}
        counterValue={searchContext.counter1}
        handleIncrement={() => {
          searchContext.dispatch({ type: "incCounter1" });
          searchContext.dispatch({ type: "incGuests" });
        }}
        handleDecrement={() => {
          searchContext.dispatch({ type: "decCounter1" });
          searchContext.dispatch({ type: "decGuests" });
        }}
        onChange={(event) => {
          searchContext.dispatch({
            type: "handleCounter1Change",
            payload: event.target.value,
          });
        }}
      >
        Adults
      </PersonCounter>
      <PersonCounter
        label={"Ages 2-12"}
        name={"childrenNumber"}
        counterValue={searchContext.counter2}
        handleIncrement={() => {
          searchContext.dispatch({ type: "incCounter2" });
          searchContext.dispatch({ type: "incGuests" });
        }}
        handleDecrement={() => {
          searchContext.dispatch({ type: "decCounter2" });
          searchContext.dispatch({ type: "decGuests" });
        }}
        onChange={(event) => {
          searchContext.dispatch({
            type: "handleCounter2Change",
            payload: event.target.value,
          });
        }}
      >
        Children
      </PersonCounter>
    </ResultsContainer>
  );
};

export default GuestsDropdown;
