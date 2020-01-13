import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchSection = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  width: 400px;
  height: 40px;
  color: grey;
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 20px;
`
const IconSearch = styled.div`
  margin: 5px;
  font-size: 16px;
`
const InputSearch = styled.input`
  width: 90%;
  font-size: 14px;
  border: none;
  &:focus {
    outline: none;
}
`
const Search = (props) => {
  const [query, setQuery] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setQuery(e.target.value)
    }
  }
  props.onSearch(query)
  
  return (
    <SearchSection>
      <IconSearch>
        <FontAwesomeIcon icon={faSearch} />
      </IconSearch>
      <InputSearch
        placeholder='Seacrh by ...'
        type='text'
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </SearchSection>
  );
}

export default Search
