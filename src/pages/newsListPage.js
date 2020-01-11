import React, { useState } from 'react';
import NewsList from '../components/news/newsList'
import useFetchData from './useFetchData';
import Spinner from '../components/spinner/spinner';
import Logout from '../components/logout/logout'

const NewsListPage = () => {
  const [result, loading, error] = useFetchData();
  const items = (result && result.articles) || [];
  return (
    <>
      <Logout/>
      <NewsList items={items} />
      {loading && <Spinner />}
    </>
  );
}

export default NewsListPage;
