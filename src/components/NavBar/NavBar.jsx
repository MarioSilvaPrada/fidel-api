import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import * as S from './NavBar.styled';

const NavBar = ({ setFilter, filter }) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  return (
    <S.Container>
      <S.StyledLink>Transactions</S.StyledLink>
      <S.SearchBarContainer isOpen={isSearchBarOpen}>
        <S.IconWrapper onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}>
          <FaSearch size="1.5rem" />
        </S.IconWrapper>
        <S.SearchBar
          type="text"
          placeholder={isSearchBarOpen ? 'Search by location' : ''}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </S.SearchBarContainer>
    </S.Container>
  );
};

export default NavBar;
