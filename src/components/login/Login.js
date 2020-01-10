import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import checkAuthorized from './useLogin.js';
import loginPageStories from '../../stories/loginPage.stories.js';

const LoginContainer = styled.div`
  box-shadow: 0px 0px 6px 3px rgba(219,219,219,1);
  text-align: center;
  padding: 20px;
  margin: 20px;
  max-width: 400px;
  height: 400px;
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
`
const ErrorContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: red;
  text-align: center;
  margin-bottom: 10px;
`
const TextLogin = styled.div`
  font-size: 35px;
  font-weight: bold;
`
const InputLabel = styled.div`
  font-size: 20px;
`
const InputContainer = styled.div`
  border-bottom: 1px solid #D1D1D1;
  text-align: left;
  margin: 20px;
`
const InputSection = styled.input`
  border: none;
  width: 100%;
  margin: 10px 0 10px 0;
  font-size: 15px;
  line-height: 20px;
  &:focus {
    outline: none;
  }
`
const LoginButton = styled.div`
  margin: 20px;
  border: none;
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  background: #A287DB;
  color: white;
`
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await checkAuthorized(username, password);
    } catch(error) {
      setError('Invalid username or password!');
      setUsername('');
      setPassword('');
    }
    setLoading(false);
  }

  return (
    <LoginContainer>
      <TextLogin>Login</TextLogin>
      <InputContainer>
        {error && <ErrorContainer>{error}</ErrorContainer>}
        <InputLabel>Username</InputLabel>
        <InputSection 
           placeholder='Type your username'
           type='text'
           value={username}
           onChange={(e)=> setUsername(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Password</InputLabel>
        <InputSection 
           placeholder='Type your password'
           type='password'
           value={password}
           onChange={(e)=> setPassword(e.target.value)}
        />
      </InputContainer>
      <LoginButton disabled={loading} onClick={(e)=> login(e)}>
        {loading ? 'Logging in...' : 'Log in'}
      </LoginButton>
    </LoginContainer>
  );
}

export default LoginPage
