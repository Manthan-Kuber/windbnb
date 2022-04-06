import React from "react";
import styled from "styled-components";
import StaysData from "../stays.json";

const MainContent = () => {
  return (
    <>
      <TitleContainer>
        <h1>Stays in Finland</h1>
        <h5>12+ stays</h5>
      </TitleContainer>
      <CardsContainer>
        {StaysData.map((stay, index) => (
          <Card>
            <img src={stay.photo} alt={`image no. ${index}`} />
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
  grid-template-columns: repeat(3, 1fr);
  
  gap: 1rem;
`;

const Card = styled.article`
  background-color: red;
  img {
    width: 100%;
    object-fit: cover;
    height: auto;
    border-radius: 24px;
  }
`;
