import React, { useContext } from "react";
import StaysData from "../stays.json";
import { FaStar } from "react-icons/fa";
import { VscSearchStop } from "react-icons/vsc";
import { SearchContext } from "../App";
import {
  TitleContainer,
  CardsContainer,
  Card,
  InfoContainer,
  HostWrapper,
  RatingWrapper,
  Title,
  NotFoundWrapper,
} from "./MainContent.styles";

const MainContent = () => {
  const searchContext = useContext(SearchContext);

  const filterLogic = StaysData.filter((stay) => {
    if (searchContext.searchTerm === "") return stay;
    if (searchContext.searchTerm <= stay.maxGuests) return stay;
    else if (
      searchContext.searchTerm.includes(stay.city.toLowerCase()) &&
      searchContext.searchTerm.slice(-1) <= stay.maxGuests
    ) {
      return stay;
    }
    return false;
  });

  return (
    <>
      <TitleContainer>
        <h1>Stays in Finland</h1>
        <h5>{filterLogic.length}+ Stays</h5>
      </TitleContainer>
      {filterLogic.length ? (
        <CardsContainer>
          {filterLogic.map((stay, index) => (
            <Card key={index}>
              <img src={stay.photo} alt={`Card no. ${index}`} />
              <InfoContainer>
                <HostWrapper>
                  {stay.superHost && <h2>Super Host</h2>}
                  <p>
                    {stay.type} . {stay.beds} beds
                  </p>
                </HostWrapper>
                <RatingWrapper>
                  <FaStar className="star-icon" />
                  <p>{stay.rating}</p>
                </RatingWrapper>
              </InfoContainer>
              <Title>{stay.title}</Title>
            </Card>
          ))}
        </CardsContainer>
      ) : (
        <NotFoundWrapper>
          <VscSearchStop className="icon" />
          <h1>No Search Results Were Found For The Search!</h1>
        </NotFoundWrapper>
      )}
    </>
  );
};

export default MainContent;
