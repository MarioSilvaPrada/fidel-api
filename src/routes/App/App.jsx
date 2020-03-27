import React from 'react';
import api from 'api/api';

import * as S from './App.styled';

const App = () => {
  api.get().then((res) => console.log(res));
  return (
    <S.Container>
      <h1>Home</h1>
    </S.Container>
  );
};

export default App;
