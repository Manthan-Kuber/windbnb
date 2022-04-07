import React from "react";
import { ModalInput, InputWrapper } from "./Header.styles";
import { ResultsContainer } from "./Header.styles";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import LocationDropdownRow from "./LocationDropdownRow";
import GuestsDropdown from "./GuestsDropdown";
import Data from "../stays.json";

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
  const { width } = useWindowDimensions();

  return (
    <InputWrapper>
      <label>{label}</label>
      <ModalInput
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        readOnly={readOnly}
      />

      {width > 640 && guestsFocus && <GuestsDropdown />}
      {width > 640 && locationFocus && (
        <ResultsContainer>
          {StaysData.map((stay, index) => {
            return (
              <LocationDropdownRow key={index} stay={stay} index={index} onBlur={onBlur} />
            );
          })}
        </ResultsContainer>
      )}
    </InputWrapper>
  );
};

export default InputSearchBar;
