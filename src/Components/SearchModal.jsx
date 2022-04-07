import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import {
  ModalOverlay,
  ModalWrapper,
  ButtonContainer,
  ModalContentWrapper,
} from "./Header.styles";
import { GrClose } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchContext } from "./SearchBlock";
import InputSearchBar from "./InputSearchBar";

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
          <InputSearchBar
            locationFocus={focus.locationFocus}
            label={"Location"}
            value={searchContext.location}
            onFocus={(prevState) =>
              setFocus({ ...prevState, locationFocus: true })
            }
            onBlur={(prevState) =>
              setFocus({ ...prevState, locationFocus: false })
            }
            onChange={(event) =>
              searchContext.dispatch({
                type: "locationChangeHandler",
                payload: event.target.value,
              })
            }
          />
          <InputSearchBar
            readOnly
            guestsFocus={focus.guestsFocus}
            label={"Guests"}
            value={searchContext.guests}
            onFocus={(prevState) =>
              setFocus({ ...prevState, guestsFocus: true })
            }
            onBlur={(prevState) =>
              setFocus({ ...prevState, guestsFocus: false })
            }
            onChange={(event) =>
              searchContext.dispatch({
                type: "guestChangeHandler",
                payload: event.target.value,
              })
            }
          />
          <ButtonContainer
            onClick={() => {
              searchContext.dispatch({
                type: "setSearchTerm",
                payload: (
                  JSON.stringify(searchContext.location) +
                  JSON.stringify(searchContext.guests)
                )
                  .replace(/\s/g, "")
                  .replace(/,/g, "")
                  .toLowerCase(),
              });
              searchContext.dispatch({ type: "toggleModal" });
              alert(searchContext.searchTerm); //Remove later
            }}
          >
            <AiOutlineSearch size="16px" />
            <p>Search</p>
          </ButtonContainer>
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalOverlay>,
    document.getElementById("portal-root")
  );
};

export default SearchModal;
