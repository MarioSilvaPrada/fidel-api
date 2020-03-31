import React from 'react';

// library to check if a specific element is in viewport
import { useInView } from 'react-intersection-observer';

// logos
import visa from 'assets/visa.png';
import mastercard from 'assets/mastercard.png';
import * as S from './Card.styled';

const Card = ({ scheme, lastNumbers }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <S.CardWrapper scheme={scheme} ref={ref} inView={inView} isAnimated={inView}>
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
