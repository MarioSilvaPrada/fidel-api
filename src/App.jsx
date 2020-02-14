import React from 'react';
import * as S from './App.styled';

// Components
import NavBar from 'src/components/NavBar/NavBar';

const App = () => {
  return (
    <S.Container>
      <h1>Hello from the other side!</h1>
      <p>Page1</p>
      <p>Page2</p>
    </S.Container>
  );
};

export default App;
