import React, { useState } from 'react';
import NewsList from '../components/news/NewsList'
import useFetchData from './useFetchData';
import Spinner from '../components/spinner/spinner';

const NewsListPage = () => {
  const [result, loading, error] = useFetchData();
  const items = (result && result.articles) || [];
  return (
    <>
      <NewsList items={items} />
      {loading && <Spinner />}
    </>
  );
}

export default NewsListPage;
