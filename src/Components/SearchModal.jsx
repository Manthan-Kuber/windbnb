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
import { SearchContext } from "../App";
import InputSearchBar from "./InputSearchBar";
import { ResultsContainer } from "./Header.styles";
import LocationDropdownRow from "./LocationDropdownRow";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import Data from "../stays.json";
import GuestsDropdown from "./GuestsDropdown";
import { motion } from "framer-motion";

let StaysData = [...new Map(Data.map((stay) => [stay["city"], stay])).values()];

const SearchModal = () => {
  const [focus, setFocus] = useState({
    locationFocus: false,
    guestsFocus: false,
  });
  const { width } = useWindowDimensions();
  const searchContext = useContext(SearchContext);
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalWrapper
        as={motion.div}
        key="SearchModal"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        exit={{ opacity: 0, y: "-100%" }}
      >
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
            placeholder={"Add Location"}
          />

          <InputSearchBar
            readOnly
            guestsFocus={focus.guestsFocus}
            label={"Guests"}
            value={searchContext.guests === 0 ? "" : searchContext.guests}
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
            placeholder={"Add Guests"}
          />
          <ButtonContainer
            onClick={() => {
              searchContext.dispatch({
                type: "setSearchTerm",
                payload: (searchContext.location + searchContext.guests)
                  .replace(/,/g, "")
                  .replace(/\s/g, "")
                  .toLowerCase(),
              });
              searchContext.dispatch({ type: "toggleModal" });
            }}
          >
            <AiOutlineSearch size="16px" />
            <p>Search</p>
          </ButtonContainer>
          {width < 640 && focus.locationFocus && (
            <ResultsContainer>
              {StaysData.map((stay, index) => {
                return (
                  <LocationDropdownRow
                    key={index}
                    stay={stay}
                    index={index}
                    onBlur={(prevState) =>
                      setFocus({ ...prevState, locationFocus: false })
                    }
                  />
                );
              })}
            </ResultsContainer>
          )}
          {width < 640 && focus.guestsFocus && <GuestsDropdown />}
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalOverlay>,
    document.getElementById("portal-root")
  );
};

export default SearchModal;
