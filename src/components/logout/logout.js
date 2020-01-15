import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Types from '../../redux/types';

const LogoutButton = styled.div`
  border-radius: 15px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  font-size: 15px;
  background: #A287DB;
  color: white;
  cursor: pointer;
  @media(max-width: 414px) {
    padding: 5px 10px;
  }
`
const Logout = () => {
  const [logout, setlogout] = useState(false);
  const dispatch = useDispatch();

  if (logout) {
    dispatch({ type: Types.IS_AUTHENTICATED, payload: false })
  }
  return (
    <LogoutButton onClick={(e) => setlogout(true)}>Log out</LogoutButton>
  );
}

export default Logout;
