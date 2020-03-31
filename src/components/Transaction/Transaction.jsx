import React from 'react';
import moment from 'moment';

import Card from 'components/Card/Card';
import * as S from './Transaction.styled';

const Transaction = ({
  datetime, amount, card, location, position,
}) => (
  <S.Container>
    <S.InfoWrapper>
      <S.Title>Details</S.Title>
      <S.Detail>
        Created at:
        {moment(datetime).format('MMMM Do YYYY')}
      </S.Detail>
      <S.Detail>
        Location:
        {location.city}
      </S.Detail>
      <S.Detail>
        Amount: €
        {amount.toFixed(2)}
      </S.Detail>
    </S.InfoWrapper>
    <Card
      scheme={card.scheme}
      lastNumbers={card.lastNumbers}
      position={position}
    />
  </S.Container>
);

export default Transaction;
