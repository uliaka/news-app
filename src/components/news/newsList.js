import React from 'react';
import styled from 'styled-components';
import NewsItem from './newsItem'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;
`

const NewsList = (props) => {
  return (
    <ListContainer>
      {props.items.map(item =>
        <NewsItem item={item} />
      )}
    </ListContainer>
  );
}

export default NewsList