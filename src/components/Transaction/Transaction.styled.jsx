import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 2px solid #777;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 3rem;
  box-shadow: 0 10px 10px -6px #777;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  margin-right: 4rem;
  border-radius: 8px;
  padding: 3rem;
  position: relative;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Detail = styled.p`
  font-size: 1rem;
  margin-bottom: 1.1rem;
`;

export const Amount = styled.p`
  position: absolute;
  font-weight: bold;
  bottom: -1rem;
  background: #f3c623;
  padding: .5rem;
  border-radius: 8px;
  background-color: #fbb034;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
  color: black;
`;
