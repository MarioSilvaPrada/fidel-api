import styled, { css, keyframes } from 'styled-components';

const Animation = keyframes`
 from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const visaBackground = css`
  background-color: #ffcfdf;
  background-image: linear-gradient(315deg, #ffcfdf 0%, #b0f3f1 74%);
`;

const mastercardBackground = css`
  background-color: #fce043;
  background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);
`;


export const CardWrapper = styled.div`
  padding: 1rem;
  width: 20rem;
  height: 11.87rem;
  border-radius: 8px;
  box-shadow: 0 10px 10px -6px #777;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.darkBlue};
  font-family: 'Space Mono', monospace;
  animation: ${(props) => props.isAnimated && Animation} 1s forwards linear;
  ${({ scheme }) => (scheme === 'visa' ? visaBackground : mastercardBackground)};
`;

export const Numbers = styled.p`
  font-size: 1.25rem;
  text-align: center;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div``;

export const Info = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

export const CardTitle = styled.p`font-size: .7rem;`;

export const CardLogo = styled.img`
  width: 3rem;
  align-self: flex-end;
`;
