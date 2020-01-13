import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

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
const EditBtn = styled.div`
  background-color: yellow;
  width: 20px;
  height: 20px;
  padding: 5px 15px;
  cursor: pointer;
`

const Profile = (props) => {
  const user = useSelector(state => state.user)
  return (
    <>
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
      <EditBtn onClick={props.onEdit}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </EditBtn>
    </>
  );
}

export default Profile;

