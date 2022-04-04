import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import {
  ModalOverlay,
  ModalWrapper,
  InputWrapper,
  ModalInput,
  ButtonContainer,
  ModalContentWrapper,
  ResultsWrapper,
  LocationResults,
} from "./Header.styles";
import { GrClose } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchContext } from "./SearchBlock";
import Data from "../stays.json";

let StaysData = [...new Map(Data.map((stay) => [stay["city"], stay])).values()];

const SearchModal = () => {
  const [focus, setFocus] = useState({
    locationFocus: false,
    guestsFocus: false,
  });
  const searchContext = useContext(SearchContext);
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalWrapper>
        <p>
          <b>Edit your search</b>
        </p>
        <GrClose
          className="close-icon"
          size="16px"
          onClick={() => searchContext.dispatch({ type: "toggleModal" })}
        />
        <ModalContentWrapper>
          <InputWrapper>
            <label>Location</label>
            <ModalInput
              value={searchContext.location}
              onFocus={(prevState) =>
                setFocus({
                  ...prevState,
                  locationFocus: true,
                })
              }
              onBlur={(prevState) =>
                setFocus({
                  ...prevState,
                  locationFocus: false,
                })
              }
              onChange={(event) =>
                searchContext.dispatch({
                  type: "locationChangeHandler",
                  payload: event.target.value,
                })
              }
            />
          </InputWrapper>
          <InputWrapper>
            <label>Guests</label>
            <ModalInput
              value={searchContext.guests}
              onChange={(event) =>
                searchContext.dispatch({
                  type: "guestChangeHandler",
                  payload: event.target.value,
                })
              }
              onFocus={(prevState) =>
                setFocus({
                  ...prevState,
                  guestsFocus: true,
                })
              }
              onBlur={(prevState) =>
                setFocus({
                  ...prevState,
                  guestsFocus: false,
                })
              }
            />
          </InputWrapper>
          <ButtonContainer>
            <AiOutlineSearch size="16px" />
            <p>Search</p>
          </ButtonContainer>
        </ModalContentWrapper>
        {focus.locationFocus && (
          <ResultsWrapper>
            <LocationResults>
              {StaysData.map((stay, index) => {
                return <p key={index}>{`${stay.city} , ${stay.country}`}</p>;
              })}
            </LocationResults>
            <div />
            <div />
          </ResultsWrapper>
        )}
        {focus.guestsFocus && (
          <>
            <input type="number" />
          </>
        )}
      </ModalWrapper>
    </ModalOverlay>,
    document.getElementById("portal-root")
  );
};

export default SearchModal;
