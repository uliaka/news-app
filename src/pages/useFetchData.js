import { useState, useEffect } from 'react';

const url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=f5028aa71fe0479980eaa4a7290790d0';

const fetchData = async () => {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch(err) {
    console.error(err);
  }
}

const useFetchData = () => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true)
        const result = await fetchData()
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
  }, [])
  return [result, loading, error]
}

export default useFetchData;