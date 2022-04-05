import styled from "styled-components";

export const HeaderContainer = styled.header`
  @media (min-width: 45em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoContainer = styled.div``;

export const SearchContainer = styled.div`
  box-shadow: 0px 1px 6px 0px #0000001a;
  border-radius: 16px;
  padding-block: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  place-items: center;
  margin-block: 4rem;
  width: min(100%, 35rem);
  margin-inline: auto;
  cursor: pointer;

  @media (min-width: 45em) {
    margin-block: revert;
    margin-inline: revert;
  }

  .search-icon {
    margin-inline-start: 1.5rem;
    margin-inline-end: 2.3rem;
  }
`;

export const SearchInputs = styled.input`
  border: none;
  font: 400 1.4rem "Mulish", sans-serif;
  padding-block: 1rem;
  text-align: center;
  cursor: pointer;
  width: 100%;
  &:nth-child(2) {
    border-right: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2;
  }

  &:focus {
    outline: none;
  }
`;

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
`;

export const ModalWrapper = styled.div`
  background-color: white;
  padding: 2.4rem 1.2rem;
  font: 400 1.2rem "Mulish", sans-serif;
  position: relative;

  .close-icon {
    position: absolute;
    top: 2.4rem;
    right: 1.2rem;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 1.2rem;
  width: 100%;
  position: relative;

  @media (min-width: 40em) {
    &:focus-within {
      outline: 2.5px solid black;
    }
  }

  &:first-child {
    box-shadow: 0px -1px 6px 0px #0000001a;
    margin-top: 1.6rem;
    border-radius: 16px 16px 0 0;

    @media (min-width: 40em) {
      margin-top: revert;
      box-shadow: revert;
      border-radius: 16px;
    }
  }

  &:nth-child(2) {
    border-top: 1px solid #f2f2f2;
    box-shadow: 0px 1px 6px 0px #0000001a;
    border-radius: 0 0 16px 16px;

    @media (min-width: 40em) {
      border-radius: 16px;
      box-shadow: revert;
      border-top: revert;
    }
  }

  label {
    display: block;
    text-transform: uppercase;
    font: 800 0.9rem "Mulish", sans-serif;
    margin-bottom: 0.4rem;
  }
`;

export const ModalInput = styled.input`
  border: none;
  font: 400 1.4rem "Mulish", sans-serif;
  color: #333;
  margin-bottom: 1.2rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.button`
  margin-left: auto;
  margin-right: auto;
  background-color: var(--clr-primary);
  border-radius: 6px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 2.7rem;
  margin-top: 1.6rem;
  font: 700 1.4rem "Mulish", sans-serif;
  cursor: pointer;

  @media (min-width: 40em) {
    margin-top: revert;
    margin-inline: 1rem;
  }
`;

export const ModalContentWrapper = styled.div`
  @media (min-width: 40em) {
    display: flex;
    align-items: center;
    margin-top: 1.6rem;
    box-shadow: 0px 1px 6px 0px #0000001a;
    border-radius: 16px;
    max-width: 55em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 182px;
  }
`;

export const ResultsContainer = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 0.5rem);
  background: white;
  height: 200px;
  width: 250px;
  overflow: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  font: 400 1.4rem "Mulish", sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ResultRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const CounterWrapper = styled.div`
  label {
    font: 400 1.4rem "Mulish", sans-serif;
    color: lightgrey;
    text-transform: capitalize;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const CounterInput = styled.input`
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  width: 10%;
  text-align: center;
  font:700 1.4rem "Mulish",sans-serif;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const CounterButton = styled.button`
  width: 2.3rem;
  border: none;
  color: #828282;
  background-color: white;
  font-size: 2rem;
  border:1px solid #828282;
  border-radius: 6px;

  &:hover{
    cursor: pointer;
  }
`;
