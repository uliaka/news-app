import React, { useState } from 'react';
import NewsList from '../components/news/newsList'
import useFetchData from './useFetchData';

const NewsListPage = () => {
const [result, loading, error] = useFetchData();
const items = (result && result.articles) || [];
  return (
    <NewsList items={items} />
  );
}

export default NewsListPage;
