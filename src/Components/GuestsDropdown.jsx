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
        value={searchContext.counter1}
        handleIncrement={() => {
          SearchContext.dispatch({ type: "incCounter1", payload: 1 });
          searchContext.dispatch({ type: "incGuests" });
        }}
        handleDecrement={() => {
          SearchContext.dispatch({ type: "decCounter1", payload: 1 });
          searchContext.dispatch({ type: "decGuests" });
        }}
      >
        Adults
      </PersonCounter>
      <PersonCounter
        label={"Ages 2-12"}
        value={searchContext.counter2}
        handleIncrement={() => {
          SearchContext.dispatch({ type: "incCounter2", payload: 1 });
          searchContext.dispatch({ type: "incGuests" });
        }}
        handleDecrement={() => {
          SearchContext.dispatch({ type: "decCounter2", payload: 1 });
          searchContext.dispatch({ type: "decGuests" });
        }}
      >
        Children
      </PersonCounter>
    </ResultsContainer>
  );
};

export default GuestsDropdown;
