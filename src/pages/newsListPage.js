import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Types from '../redux/types';
import NewsList from '../components/news/NewsList'
import useFetchData from './useFetchData';
import Spinner from '../components/spinner/spinner';
import Search from '../components/search/Search';

const ErrorContainer = styled.div`
  box-shadow: 0px 0px 6px 3px rgba(219,219,219,1);
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  font-size: 20px;
`
const NewsListContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 700px;
`

const NewsListPage = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef({});
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('');
  const [result, loading, error] = useFetchData(query, page);
  const items = (result && result.articles) || [];

  const handleScroll = () => {
    const scroll = scrollRef.current
    const scrolledToBottom = Math.ceil(scroll.scrollTop + scroll.clientHeight) >= scroll.scrollHeight;
    if (scrolledToBottom) {
      setPage(page + 1)
    }
  }
  if (items.length > 0) {
    dispatch({ type: Types.SET_NEWS, payload: items })
  }

  return (
    <>
      <Search onSearch={setQuery} />
      <NewsListContainer ref={scrollRef} onScroll={handleScroll}>
        <NewsList items={items} />
        {loading && <Spinner />}
      </NewsListContainer>
      {error &&
        <ErrorContainer>
          {error}
        </ErrorContainer>
      }
    </>
  );
}

export default NewsListPage;
