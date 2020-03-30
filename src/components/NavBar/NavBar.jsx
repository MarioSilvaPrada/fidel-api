import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import * as S from './NavBar.styled';

const NavBar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  return (
    <S.Container>
      <S.StyledLink>Transactions</S.StyledLink>
      <S.SearchBarContainer isOpen={isSearchBarOpen}>
        <S.IconWrapper onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}>
          <FaSearch size="1.5rem" />
        </S.IconWrapper>
        <S.SearchBar type="text" />
      </S.SearchBarContainer>
    </S.Container>
  );
};

export default NavBar;
