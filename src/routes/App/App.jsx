import React, { useState, useEffect } from 'react';
import api from 'api/api';
import moment from 'moment';

import * as S from './App.styled';

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get().then((res) => {
      setData(res.data.items);
      setIsLoading(false);
    });
  }, []);

  return (
    <S.Container>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        data.map(({ created, id }) => (
          <div key={id}>
            <p>
              created at:
              {moment(created).format('MMMM Do YYYY')}
            </p>
          </div>
        ))
      )}
    </S.Container>
  );
};

export default App;
