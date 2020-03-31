import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: ${({ theme }) => theme.sizes.navbarHeight};
  background: #00b4db;
  background: linear-gradient(to right, #0083b0, #00b4db);

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    height: auto;
  }
`;

export const StyledLink = styled.h1`
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-bottom: 1rem;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  height: 3rem;
  width: ${({ isOpen }) => (isOpen ? '20rem' : '3.5rem')};
  transition: 1s;
`;

export const SearchBar = styled.input`
  border: 4px solid ${({ theme }) => theme.darkBlue};
  border-radius: 3rem;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  padding-left: 1.2rem;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 25%;
  right: 1rem;
  color: ${({ theme }) => theme.darkBlue};
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-bottom: 1rem;
  }
`;

export const StyledRadio = styled.input`margin-right: .5rem;`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  position: relative;
  cursor: pointer;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: -1.2rem;
    height: 1rem;
    width: 1rem;
    border-radius: 100%;
    background-color: #eee;
  }

  .checkmark:hover {
    background-color: #ccc;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    left: 5px;
    top: 2px;
    width: .15rem;
    height: .5rem;
    border: solid ${({ theme }) => theme.darkBlue};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
