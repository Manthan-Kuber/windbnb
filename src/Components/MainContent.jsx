import React, { useContext } from "react";
import styled from "styled-components";
import StaysData from "../stays.json";
import { FaStar } from "react-icons/fa";
import { SearchContext } from "../App";

const MainContent = () => {
  const searchContext = useContext(SearchContext);

  const filterLogic = StaysData.filter((stay) => {
    if (
      searchContext.searchTerm.includes(stay.city.toLowerCase()) &&
      searchContext.searchTerm.charAt(-1) <= stay.maxGuests
    ) {
      return stay;
    }
    if (searchContext.searchTerm.includes(0) || searchContext.searchTerm === "")
      return stay;
  });
  return (
    <>
      <TitleContainer>
        <h1>Stays in Finland</h1>
        <h5>{filterLogic.length}+ Stays</h5>
      </TitleContainer>
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
    </>
  );
};

export default MainContent;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: clamp(2.4rem, 2.5vw + 1rem, 3.2rem);

  h1 {
    font: 700 clamp(1.8rem, 2vw + 0.5rem, 2.4rem) "Montserrat", sans-serif;
    color: #333;
  }

  h5 {
    font: 500 1.4rem "Montserrat", sans-serif;
    color: #4f4f4f;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: 3.2rem;
  @media (min-width: 80em) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3.2rem;
    grid-row-gap: 5rem;
  }
`;

const Card = styled.article`
  /* display: flex;
  flex-direction: column;
  max-width: 60rem;
  max-height: 60rem;
  margin-inline: auto; */
  display: grid;
  grid-template-rows: minmax(auto, 30rem);
  grid-template-columns: minmax(auto, 50rem);
  margin-inline: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
  }
  @media (min-width: 80em) {
    display: grid;
    grid-template-rows: 30rem;
    grid-template-columns: revert;
    max-width: 60rem;
    max-height: revert;
    margin-inline: revert;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const HostWrapper = styled.div`
  display: flex;
  align-items: center;
  h2 {
    text-transform: uppercase;
    font: 700 clamp(1rem, 0.5vw + 0.5rem, 1.4rem) "Montserrat", sans-serif;
    color: #4f4f4f;
    border: 1px solid #4f4f4f;
    padding: 0.7rem 1rem;
    border-radius: 12px;
    margin-right: 1rem;
  }
  p {
    font: 500 clamp(1.2rem, 0.5vw + 0.5rem, 1.4rem) "Montserrat", sans-serif;
    color: #828282;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .star-icon {
    color: var(--clr-primary);
  }
  p {
    font: 500 clamp(1.2rem, 0.5vw + 0.5rem, 1.4rem) "Montserrat", sans-serif;
    color: #828282;
    white-space: nowrap;
  }
`;

const Title = styled.h1`
  color: #333;
  font: 600 clamp(1.4rem, 0.5vw + 0.5rem, 1.6rem) "Montserrat", sans-serif;
  margin-top: 1.2rem;
`;
