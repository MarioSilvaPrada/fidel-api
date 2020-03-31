import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 2px solid #777;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 3rem;
  box-shadow: 0 10px 10px -6px #777;
`;

export const InfoWrapper = styled.div`
  margin-right: 4rem;
  border: 2px solid black;
  border-radius: 8px;
  padding: 3rem;
  position: relative;
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
  bottom: -1rem;
  background: #f3c623;
  padding: .5rem;
  border-radius: 8px;

`
