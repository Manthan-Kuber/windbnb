import React, { useContext, useState } from "react";
import { ModalInput, InputWrapper } from "./Header.styles";
import { ResultsContainer, ResultRow } from "./Header.styles";
import Data from "../stays.json";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import { MdLocationOn } from "react-icons/md";
import { SearchContext } from "./SearchBlock";
import PersonCounter from "./PersonCounter";

let StaysData = [...new Map(Data.map((stay) => [stay["city"], stay])).values()];

const InputSearchBar = (props) => {
  const {
    label,
    onFocus,
    onBlur,
    onChange,
    value,
    locationFocus,
    guestsFocus,
    readOnly,
  } = props;
  const searchContext = useContext(SearchContext);
  const { width } = useWindowDimensions();
  const [counters, setCounters] = useState({ counter1: 0, counter2: 0 });

  return (
    <InputWrapper>
      <label>{label}</label>
      <ModalInput
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        readOnly={readOnly}
      />

      {width > 640 && locationFocus && (
        <ResultsContainer>
          {StaysData.map((stay, index) => {
            return (
              <ResultRow
                key={index}
                onMouseOver={() =>
                  searchContext.dispatch({
                    type: "locationChangeHandler",
                    payload: `${stay.city} , ${stay.country}`,
                  })
                }
                onClick={onBlur}
              >
                <MdLocationOn />
                <p key={index}>{`${stay.city} , ${stay.country}`}</p>
              </ResultRow>
            );
          })}
        </ResultsContainer>
      )}
      {width > 640 && guestsFocus && (
        <ResultsContainer>
          <PersonCounter
            label={"Ages 13 or above"}
            value={counters.counter1}
            handleIncrement={() => {
              setCounters({ ...counters, counter1: counters.counter1 + 1 });
              searchContext.dispatch({ type: "incGuests" });
            }}
            handleDecrement={() => {
              if (counters.counter1 === 0) return counters.counter1;
              setCounters({ ...counters, counter1: counters.counter1 - 1 });
              searchContext.dispatch({ type: "decGuests" });
            }}
          >
            Adults
          </PersonCounter>
          <PersonCounter
            label={"Ages 2-12"}
            value={counters.counter2}
            handleIncrement={() => {
              setCounters({ ...counters, counter2: counters.counter2 + 1 });
              searchContext.dispatch({ type: "incGuests" });
            }}
            handleDecrement={() => {
              if (counters.counter2 === 0) return counters.counter2;
              setCounters({ ...counters, counter2: counters.counter2 - 1 });
              searchContext.dispatch({ type: "decGuests" });
            }}
          >
            Children
          </PersonCounter>
        </ResultsContainer>
      )}
    </InputWrapper>
  );
};

export default InputSearchBar;
