import React, { useState, useEffect } from 'react';
import api from 'api/api';
import moment from 'moment';

import * as S from './App.styled';


const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get().then((res) => {
      setData(res.data);
      console.log(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <S.Container>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        data.items.map(({
          datetime, id, amount, card,
        }) => (
          <div key={id}>
            <p>
              created at:
              {moment(datetime).format('MMMM Do YYYY')}
            </p>
            <p>
              €
              {amount.toFixed(2)}
            </p>
            <p>
              €
              {card.scheme}
            </p>
            <p>
              €
              {card.lastNumbers}
            </p>
          </div>
        ))
      )}
    </S.Container>
  );
};

export default App;
