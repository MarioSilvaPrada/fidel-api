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

  // Searchbar Filter State
  const [filter, setFilter] = useState('');

  const ITEMS_DISPLAY = 20;

  console.log(data);

  useEffect(() => {
    api.get(`?limit=${ITEMS_DISPLAY}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  const getNext = () => {
    setIsLoading(true);
    api
      .get(`?start=${encodeURIComponent(JSON.stringify(data.last))}&limit=${ITEMS_DISPLAY}`)
      .then((res) => {
        console.log(res);
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
          <NavBar setFilter={setFilter} filter={filter} />
          {data.items
            .filter((item) => item.location.city.toLowerCase().includes(filter.toLowerCase()))
            .map(({
              datetime, id, amount, card, location,
            }) => (
              <Transaction
                key={id}
                datetime={datetime}
                id={id}
                amount={amount}
                location={location}
                card={card}
              />
            ))}
          <S.ButtonsWrapper>
            <button type="button" onClick={() => getNext()}>Next</button>
          </S.ButtonsWrapper>
        </div>
      )}
    </S.Container>
  );
};

export default App;
