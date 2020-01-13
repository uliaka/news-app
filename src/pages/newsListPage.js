import React, { useState } from 'react';
import NewsList from '../components/news/NewsList'
import useFetchData from './useFetchData';
import Spinner from '../components/spinner/spinner';
import Search from '../components/search/Search';

const NewsListPage = () => {
  const [query, setQuery] = useState('');
  const [result, loading, error] = useFetchData(query);
  const items = (result && result.articles) || [];
  return (
    <>
      <Search onSearch={setQuery}/>
      <NewsList items={items} />
      {loading && <Spinner />}
    </>
  );
}

export default NewsListPage;
