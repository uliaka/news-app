import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Logout from '../logout/logout'
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
  padding: 20px;
  flex: 1;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #363636;
  color: white;
  a {
    color: white;
  }
`
const Home = styled.div`
  height: 20px;
  font-size: 17px;
  flex: 1;
`
const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  @media(max-width: 714px) {
    flex: 3;
  }
  @media(max-width: 714px) {
    font-size: 12px;
  }
`
const Profile = styled.div`
  height: 20px;
  font-size: 17px;
  cursor: pointer;
`
const HelloMessage = styled.div`
  height: 20px;
  font-size: 17px;
  margin-right: 10px;
  @media(max-width: 384px) {
    display: none;
  }
`

const NavBar = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated)
  const username = useSelector(state => state.user.username)
  return (
    <NavBarContainer>
      <Home>
        <Link to='/news'>Home</Link>
      </Home>
      {isAuthenticated &&
        <ProfileContainer>
          <HelloMessage>
            Hello, {username} !
          </HelloMessage>
          <Profile>
            <Link to='/profile'>Profile</Link>
          </Profile>
          <Logout />
        </ProfileContainer>
      }
    </NavBarContainer >
  )
}

export default NavBar;