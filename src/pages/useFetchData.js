import { useState, useEffect } from 'react';

const fetchData = async (query) => {
  const searchQuery = query ? query : 'news';
  const url = 'https://newsapi.org/v2/everything?' +
    `q=${searchQuery}& ` +
    'from=2020-01-13&' +
    'sortBy=popularity&' +
    'apiKey=f5028aa71fe0479980eaa4a7290790d0'
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

const useFetchData = (query) => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true)
        const result = await fetchData(query)
        setLoading(false)
        setResult(result)
        setError(null)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(error)
      }
    }
    fetch()
  }, [query])
  return [result, loading, error]
}

export default useFetchData;