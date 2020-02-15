import React from 'react';

import * as S from './NavBar.styled';

const NavBar = () => (
  <S.Container>
    <S.StyledLink to="/">Home</S.StyledLink>
    <S.StyledLink to="/1">Page1</S.StyledLink>
    <S.StyledLink to="/2">Page2</S.StyledLink>
  </S.Container>
);

export default NavBar;
