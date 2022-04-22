import styled from 'styled-components'

export const MainWrapper = styled.div`
  padding-inline: 1.5rem;
  padding-block: 2rem;

  @media (min-width: 45em) {
    padding-inline: 9rem;
    padding-block: 5rem;
  }
`;

export const MainContainer = styled.main`
  margin-top: 4rem;

  @media (min-width: 40em) {
    margin-top: 7rem;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  margin-bottom: 2.4rem;
`;

export const FooterText = styled.p`
  font: 1.4rem "Montserrat", sans-serif;
  color: #bdbdbd;
  text-align: center;
`;