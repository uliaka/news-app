import { useState } from 'react';

const checkAuthorized = (username, password) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (username === 'admin' && password === '12345') {
      resolve({
        firstName: 'Firstname',
        lastName: 'Lastname',
        email: 'email@gmail.com',
        username: 'admin',
      })
    } else {
      reject('Invalid username or password')
    }
  }, 1000)
})

const useLogin = () => {
  const [result, setResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (username, password) => {
    try {
      setLoading(true)
      const result = await checkAuthorized(username, password)
      setLoading(false);
      setResult(result);
      setError(null);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }

  }
  return [result, loading, error, login]
}

export default useLogin;
