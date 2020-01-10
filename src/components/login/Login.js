import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useLogin from './useLogin.js';

const LoginContainer = styled.form`
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
  const [ username, setUsername ] = useState('')
  const [ pasword, setPassword] = useState('')
  const [ filed, setFiled ] = useState({username: '', pasword: ''})
  const [result, loading, error] = useLogin(filed)

  const login = () => {
    setFiled({username: username, pasword: pasword })
  }
  useEffect(() => {
    if(result) {
      console.log('result', result)
    }
  }, [filed])
  return (
    <LoginContainer>
      <TextLogin>Login</TextLogin>
      <InputContainer>
        <InputLabel>Username</InputLabel>
        <InputSection 
           placeholder='Type your username'
           type='text'
           onChange={(e)=> setUsername(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Password</InputLabel>
        <InputSection 
           placeholder='Type your password'
           type='password'
           onChange={(e)=> setPassword(e.target.value)}
        />
      </InputContainer>
      <LoginButton onClick={() => login()}>Login</LoginButton>
    </LoginContainer>
  );
}

export default LoginPage
