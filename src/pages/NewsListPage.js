import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import debounce from "lodash.debounce";
import NewsList from '../components/news/NewsList';
import useFetchData from './useFetchData';
import Spinner from '../components/spinner/Spinner';
import Search from '../components/search/Search';
import CategoryList from '../components/category/CategoryList';
import { useSelector } from 'react-redux';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 400px;
  margin-left: 40px;
  border-bottom: 1px solid grey;
  padding-bottom: 30px;
  @media(max-width: 1434px) {
    max-width: max-content;
    width: 100%;
    position: relative;
    flex-direction: row;
    justify-content: center;
    border-bottom: none;
    margin: auto;
    align-items: center;
    padding-bottom: 10px;
  }
  @media(max-width: 698px) {
    width: 99%;
    overflow: auto;
    > div {
      flex-wrap: nowrap; 
    }
  }
`
const LableContainer = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  margin-right: 10px;
  @media(max-width: 1434px) {
    display: none;
  }
`
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
  const [category, setCategory] = useState('')
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('');
  const [result, loading, error] = useFetchData(query, page, category);

  const news = useSelector(state => state.news) || [];
  console.log('state', news)

  useEffect(() => {
    if (result && result.articles) {
      setItems(items.concat(result.articles))
    }
  }, [result]);

  const handleScroll = debounce(() => {
    const scroll = scrollRef.current
    const scrolledToBottom = Math.ceil(scroll.scrollTop + scroll.clientHeight) >= scroll.scrollHeight;
    if (scrolledToBottom && result.articles.length > 0) {
      setPage(page + 1);
    }
  }, 100)

  const onSearch = (query) => {
    setItems([]);
    setQuery(query);
    setPage(1);
    setCategory('');
  }
  
  const onCategoryClick = (category) => {
    setItems([]);
    setCategory(category);
    setPage(1);
  }

  return (
    <>
      <Search onSearch={onSearch}/>
      <FilterContainer>
        <LableContainer>Category:</LableContainer>
        <CategoryList onCategoryClick={onCategoryClick} active/>
      </FilterContainer>
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
