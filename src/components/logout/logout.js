import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Types from '../../redux/types';

const LogoutContainer = styled.form`
  text-align: center;
  padding: 20px;
  width: 100px;
  height: 50px;
  display: block
`
const LogoutButton = styled.div`
  margin: 20px;
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  font-size: 15px;
  line-height: 20px;
  background: #A287DB;
  color: white;
`
const Logout = () => {
  const [logout, setlogout] = useState(false);
  const dispatch = useDispatch();

  if (logout) {
    dispatch({ type: Types.IS_AUTHENTICATED, payload: false })
  }
  return (
    <LogoutContainer>
      <LogoutButton onClick={(e) => setlogout(true)}>Log out</LogoutButton>
    </LogoutContainer>
  );
}

export default Logout;
