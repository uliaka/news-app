import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const ProfileInfoSection = styled.div`
  height: 50px;
  background-color: #D3D3D3;
  flex: 2;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const ProfileImage = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #A47ADC;
`
const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`
const ProfileInfo = styled.div`
  flex: 1;
`
const ProfileDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`
const ProfileName = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin: 0px 5px;
`
const Label = styled.div`
  font-size: 15px;
  color: grey;
  margin-top: 10px;
`
const EditBtn = styled.div`
  background-color: yellow;
  width: 20px;
  height: 20px;
  padding: 5px 15px;
  cursor: pointer;
`

const Profile = (props) => {
  const { user } = props;
  return (
    <ProfileSection>
      <ProfileInfoSection>
        <ProfileImage />
        <ProfileInfo>
         <ProfileName>{user.firstName}</ProfileName>
         <ProfileName>{user.lastName}</ProfileName>
        </ProfileInfo>
      </ProfileInfoSection>
      <ProfileDetails>
        <Label>
          Username
        </Label>
        {user.username}
        <Label>
          Email
        </Label>
        {user.email}
      </ProfileDetails>
      <EditBtn onClick={props.onEdit}>
        <FontAwesomeIcon icon={faPencilAlt}/>
      </EditBtn>
    </ProfileSection>
  );
}

export default Profile;

