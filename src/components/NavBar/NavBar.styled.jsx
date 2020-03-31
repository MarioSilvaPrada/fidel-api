import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  display: flex;
  color: white;
  position: fixed;
  top:0;
  right: 0;
  left: 0;
  height: ${({ theme }) => theme.sizes.navbarHeight};
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const StyledLink = styled.h1``;

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
