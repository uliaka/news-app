import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Logout from '../logout/logout'

const NavBarContainer = styled.div`
  padding: 20px;
  flex: 1;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #363636;
  color: white;
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
  return (
    <NavBarContainer>
      <Home>
        Home
      </Home>
      {isAuthenticated &&
        <ProfileContainer>
          <HelloMessage>
            Hello, usename !
          </HelloMessage>
          <Profile>
            Profile
        </Profile>
        <Logout/>
        </ProfileContainer>
      }
    </NavBarContainer >
  )
}

export default NavBar;