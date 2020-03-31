import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import * as S from './NavBar.styled';

const NavBar = ({
  setFilter, filter, valueRadio, setValueRadio,
}) => {
  // Searchbar animation state
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const inputRadios = [
    {
      value: '',
      placeholder: 'All',
    },
    {
      value: 'visa',
      placeholder: 'Visa',
    },
    {
      value: 'mastercard',
      placeholder: 'Mastercard',
    },
  ];

  return (
    <S.Container>
      <S.StyledLink>Transactions</S.StyledLink>
      <S.RadioContainer>
        {inputRadios.map((radio) => (
          <S.StyledLabel key={radio.value}>
            <S.StyledRadio
              name="scheme"
              type="radio"
              value={radio.value}
              checked={valueRadio === radio.value}
              onChange={(e) => setValueRadio(e.target.value)}
            />
            <span className="checkmark" />
            {radio.placeholder}
          </S.StyledLabel>
        ))}
      </S.RadioContainer>
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
