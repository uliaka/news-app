import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Profile from './Profile';
import EditProfile from './EditProfile';

const ProfileSection = styled.div`
  box-shadow: 0px 0px 6px 3px rgba(219,219,219,1);
  padding: 20px;
  max-width: 400px;
  height: 400px;
  flex-wrap: wrap;
  display: flex;
  margin: auto;
  margin-top: 20px;
`

const ProfileContainer = () => {
  const [editing, setEditing] = useState(false);
  const user = useSelector(state => state.user);
  const onSubmit = () => {
    setEditing(false);
  }
  const onCancel = () => {
    setEditing(false);
  }
  const onEdit = () => setEditing(true);
  return (
    <ProfileSection>
      {editing ?
        <EditProfile user={user} onSubmit={onSubmit} onCancel={onCancel} />
        :
        <Profile onEdit={onEdit} user={user} />}
    </ProfileSection>
  );
}

export default ProfileContainer;
