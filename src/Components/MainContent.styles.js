import styled from 'styled-components'

export const TitleContainer = styled.div`
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

export const NotFoundWrapper = styled.div`
  width: min(100%,50ch);
  line-height: 3rem;
  font: 700 clamp(1.6rem, 2vw + 0.5rem, 2.4rem) "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:30% auto;

  h1 {
    color: #333;
    text-align: center;
    letter-spacing: 2px;
  }

  .icon{
    font: 700 8rem "Montserrat", sans-serif;
    color: var(--clr-primary);
  }
`;

export const CardsContainer = styled.div`
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

export const Card = styled.article`
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

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const HostWrapper = styled.div`
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

export const RatingWrapper = styled.div`
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

export const Title = styled.h1`
  color: #333;
  font: 600 clamp(1.4rem, 0.5vw + 0.5rem, 1.6rem) "Montserrat", sans-serif;
  margin-top: 1.2rem;
`;
