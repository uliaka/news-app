import React, { useState } from 'react';
import NewsList from '../components/news/newsList'
import useFetchData from './useFetchData';
import Spinner from '../components/spinner/spinner';

const NewsListPage = () => {
const [result, loading, error] = useFetchData();
const items = (result && result.articles) || [];
  return (
    <>
    <Spinner/>
    <NewsList items={items} />
    </>
  );
}

export default NewsListPage;
