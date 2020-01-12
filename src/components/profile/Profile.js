import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ProfileContainer = styled.div`
  box-shadow: 0px 0px 6px 3px rgba(219,219,219,1);
  padding: 20px;
  max-width: 400px;
  height: 400px;
  flex-wrap: wrap;
  display: flex;
  margin: auto;
  margin-top: 20px;
`
const ProfileImage = styled.div`
  width: 50px;
  height: 150px;
  background-color: grey;
  flex: 1;
  margin-right: 20px;
`
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`
const Label = styled.div`
  font-size: 15px;
  color: grey;
`

const Profile = (props) => {
  const user = useSelector(state => state.user)
  return (
    <ProfileContainer>
      <ProfileImage />
      <ProfileInfo>
        <Label>
          First name
        </Label>
        {user.firstName}
        <Label>
          Last name
        </Label>
        {user.lastName}
        <Label>
          Username
        </Label>
        {user.username}
        <Label>
          Email
        </Label>
        {user.email}
      </ProfileInfo>
    </ProfileContainer>
  );
}

export default Profile;

