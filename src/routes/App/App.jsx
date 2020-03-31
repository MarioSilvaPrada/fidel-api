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

  const [filter, setFilter] = useState('');

  const [position, setPosition] = useState(0);

  useEffect(() => {
    api.get().then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  const onScroll = () => {
    const positionToTop = window.pageYOffset;
    setPosition(positionToTop);
  };

  useEffect(
    () => {
      window.addEventListener('scroll', onScroll);
    },
    [position],
  );

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
                position={position}
              />
            ))}
        </div>
      )}
    </S.Container>
  );
};

export default App;
