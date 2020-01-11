import React, { useState, useEffect } from 'react';
import data from './data'


const fetchData = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data)
  }, 1000)
})

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