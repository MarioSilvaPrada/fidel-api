import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './NavBar.styled';

const NavBar = () => {
  return (
    <S.Container>
      <Link to={`/1`}>Page1</Link>
      <Link to={`/2`}>Page2</Link>
    </S.Container>
  );
};

export default NavBar;
