import React, { useRef, useState } from 'react';

// logos
import visa from 'assets/visa.png';
import mastercard from 'assets/mastercard.png';
import * as S from './Card.styled';

const Card = ({ scheme, lastNumbers, position }) => {
  const inputEl = useRef(null);

  const [elementPosition, setElementPosition] = useState(0);

  const checkPosition = () => setElementPosition(inputEl.current.offsetTop);

  return (
    <S.CardWrapper
      scheme={scheme}
      ref={inputEl}
      onScroll={() => checkPosition()}
      isAnimated={elementPosition === position}
    >
      {console.log(elementPosition === position)}
      <S.CardLogo src={scheme === 'visa' ? visa : mastercard} />
      <S.Numbers>
        **** **** ****
        {lastNumbers}
      </S.Numbers>
      <S.UserInfo>
        <S.Wrapper>
          <S.CardTitle>Card Holder</S.CardTitle>
          <S.Info>John Doe</S.Info>
        </S.Wrapper>
        <S.Wrapper>
          <S.CardTitle>Expires</S.CardTitle>
          <S.Info>12/22</S.Info>
        </S.Wrapper>
      </S.UserInfo>
    </S.CardWrapper>
  );
};

export default Card;
