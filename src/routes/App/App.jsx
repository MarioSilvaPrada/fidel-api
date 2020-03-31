import React, { useState, useEffect } from 'react';
import api from 'api/api';

// components
import Spinner from 'components/Spinner/Spinner';
import Transaction from 'components/Transaction/Transaction';
import NavBar from 'components/NavBar/NavBar';

import * as S from './App.styled';

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Radio buttons filter state
  const [valueRadio, setValueRadio] = useState('');

  // Searchbar filter State
  const [filter, setFilter] = useState('');

  // Number of items to be displayed
  const ITEMS_DISPLAY = 15;

  useEffect(() => {
    api.get(`?limit=${ITEMS_DISPLAY}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  const loadMore = () => {
    setIsLoading(true);
    api
      .get(`?start=${encodeURIComponent(JSON.stringify(data.last))}&limit=${ITEMS_DISPLAY}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
  };

  return (
    <S.Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <NavBar
            setFilter={setFilter}
            filter={filter}
            valueRadio={valueRadio}
            setValueRadio={setValueRadio}
          />
          {data.items
            .filter((item) => item.location.city.toLowerCase().includes(filter.toLowerCase()))
            .filter((item) => item.card.scheme.includes(valueRadio))
            .map(({
              datetime, id, amount, card, location, currency,
            }) => (
              <Transaction
                key={id}
                datetime={datetime}
                id={id}
                amount={amount}
                location={location}
                currency={currency}
                card={card}
              />
            ))}
          <S.ButtonsWrapper>
            <S.StyledButton type="button" onClick={loadMore}>
              Load more
            </S.StyledButton>
          </S.ButtonsWrapper>
        </div>
      )}
    </S.Container>
  );
};

export default App;
