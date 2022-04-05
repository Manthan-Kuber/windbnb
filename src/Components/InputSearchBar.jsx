import React, { useContext } from "react";
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
    readOnly
  } = props;
  const searchContext = useContext(SearchContext);
  const {  width } = useWindowDimensions();
  return (
    <InputWrapper>
      <label>{label}</label>
      <ModalInput
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
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
          <PersonCounter label={"Ages 13 or above"}>Adults</PersonCounter>
          <PersonCounter label={"Ages 2-12"}>Children</PersonCounter>
        </ResultsContainer>
      )}
    </InputWrapper>
  );
};

export default InputSearchBar;
