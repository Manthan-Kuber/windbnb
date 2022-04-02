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

export const ModalSearchContainer = styled(SearchContainer)`
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;

export const ModalSearchInputs = styled(SearchInputs)`
  text-align: left;
  cursor: auto;
  padding-left: 1rem;
`;

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;