import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import debounce from "lodash.debounce";
import NewsList from '../components/news/NewsList';
import useFetchData from './useFetchData';
import Spinner from '../components/spinner/Spinner';
import Search from '../components/search/Search';

const NewsListContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 760px;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
  scrollbar-width: none;
  -ms-overflow-style: none;
`
const ErrorContainer = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: red;
  margin: auto;
  margin-top: 20px;
  font-size: 20px;
`

const NewsListPage = () => {
  const scrollRef = useRef({});
  const [page, setPage] = useState(1)
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('');
  const [result, loading, error] = useFetchData(query, page);

  useEffect(() => {
    if (result && result.articles) {
      setItems(items.concat(result.articles))
    }
  }, [result])

  const handleScroll = debounce(() => {
    const scroll = scrollRef.current
    const scrolledToBottom = Math.ceil(scroll.scrollTop + scroll.clientHeight) >= scroll.scrollHeight;
    if (scrolledToBottom && result.articles.length > 0) {
      setPage(page + 1);
    }
  }, 100)

  const onSearch = (query) => {
    setItems([])
    setQuery(query)
    setPage(1)
  }
  return (
    <>
      <Search onSearch={onSearch} />
      <NewsListContainer ref={scrollRef} onScroll={handleScroll}>
        <NewsList items={items} />
        {loading && <Spinner />}
        {error &&
          <ErrorContainer>
            Failed to fetch news
          </ErrorContainer>
        }
      </NewsListContainer>
    </>
  );
}

export default NewsListPage;
