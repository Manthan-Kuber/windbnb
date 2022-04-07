import React, { useContext } from "react";
import { ResultRow } from "./Header.styles";
import { SearchContext } from "./SearchBlock";
import { MdLocationOn } from "react-icons/md";

const LocationDropdownRow = (props) => {
  const searchContext = useContext(SearchContext);
  const { stay, index, onBlur } = props;
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
};

export default LocationDropdownRow;
