import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useLogin from './useLogin.js';
import Types from '../redux/types';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const LoginContainer = styled.div`
  box-shadow: 0px 0px 6px 3px rgba(219,219,219,1);
  text-align: center;
  padding: 20px;
  max-width: 400px;
  height: 400px;
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
  margin: auto;
  margin-top: 20px;
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
const InputSection = styled.div`
  display: flex;
  align-items: center;
`
const InputLogin = styled.input`
  border: none;
  width: 100%;
  margin: 10px 0px 10px 10px;
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
  cursor: pointer;
`
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, loading, error, login] = useLogin()
  const dispatch = useDispatch();

  if (result) {
    dispatch({ type: Types.IS_AUTHENTICATED, payload: true })
    dispatch({ type: Types.USER_INFO, payload: result })
    return <Redirect to={{ pathname: '/profile' }} />
  }
  return (
    <LoginContainer>
      <TextLogin>Log in</TextLogin>
      {error && <ErrorContainer>{error}</ErrorContainer>}
      <InputContainer>
        <InputLabel>Username</InputLabel>
        <InputSection>
          <FontAwesomeIcon icon={faUser} />
          <InputLogin
            placeholder='Type your username'
            type='text'
            name="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputSection>
      </InputContainer>
      <InputContainer>
        <InputLabel>Password</InputLabel>
        <InputSection>
          <FontAwesomeIcon icon={faKey} />
          <InputLogin
            placeholder='Type your password'
            type='password'
            value={password}
            name="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputSection>
      </InputContainer>
      <LoginButton disabled={loading} onClick={(e) => login(username, password)}>
        {loading ? 'Logging in...' : 'Log in'}
      </LoginButton>
    </LoginContainer>
  );
}

export default LoginPage;

