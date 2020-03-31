import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding-top: ${({ theme }) => theme.sizes.navbarHeight};
`;

export const Title = styled.div`color: red;`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`;

export const StyledButton = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: none;
  background: none;
  cursor: pointer;
  color: white;
  font-size: .9rem;
  font-weight: bold;
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  transition: .5s;

  &:hover {
    transform: translateY(-10px)
  }
`
