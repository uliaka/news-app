import { useState, useEffect } from 'react';

const fetchData = async (query, page) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `page=${page}&` +
    `apiKey=${API_KEY}`
  if (query) {
    url = 'https://newsapi.org/v2/everything?' +
      `q=${query}& ` +
      `page=${page}&` +
      'sortBy=popularity&' +
      `apiKey=${API_KEY}`
  }
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

const useFetchData = (query, page) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const result = await fetchData(query, page);
        setLoading(false);
        setResult(result);
        if (result.status === 'error') {
          return setError(true);
        }
        setError(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    }
    fetch()
  }, [query, page]);
  return [result, loading, error]
}

export default useFetchData;
