import React, { useState, useEffect } from 'react'


const checkAuthorized = (username, password) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (username === 'admin' && password === '12345') {
      resolve()
    } else {
      reject()
    }
  }, 1000)
})

/*const useLogin = (username, password) => {
  const [result, setResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    const login = async () => {
      try {
        setLoading(true)
        const result = await checkAuthorized(username, password)
        setLoading(false)
        setResult(result)
      } catch (error) {
        setLoading(false)
        setError(error.message)
      }
    }
    login()
  }, [username, password])
  return [result, loading, error]
}*/

export default checkAuthorized