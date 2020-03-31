import React from 'react';
import moment from 'moment';

import Card from 'components/Card/Card';
import * as S from './Transaction.styled';

const Transaction = ({
  datetime, amount, card, location, currency,
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
      <S.Amount>
        Amount:
        {' '}
        {currency === 'GBP' ? '£' : '€'}
        {' '}
        {amount.toFixed(2)}
      </S.Amount>
    </S.InfoWrapper>
    <Card scheme={card.scheme} lastNumbers={card.lastNumbers} />
  </S.Container>
);

export default Transaction;
