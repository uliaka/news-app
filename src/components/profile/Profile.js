import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ProfileSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const ProfileInfoSection = styled.div`
  height: max-content;
  margin: 0px -20px 0 -20px;
  background-color: #EDEDED;
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
  border-bottom: 1px solid #D3D3D3;
  padding-bottom: 20px;
`
const ProfileName = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin: 0px 5px;
  @media(max-width: 520px) {
    font-size: 20px;
  }
`
const Label = styled.div`
  font-size: 15px;
  color: grey;
  margin: 15px 0 15px 0;
`
const TextProfile = styled.div`
  font-size: 15px;
  margin-left: 10px;
`
const EditBtn = styled.div`
  background-color: #A287DB;
  border-radius: 10px;
  color: white;
  width: 20px;
  height: 20px;
  padding: 5px 15px;
  cursor: pointer;
  margin-top: 10px;
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
        <ProfileDetailsItem>
          <FontAwesomeIcon color='#A287DB' icon={faUser} />
          <TextProfile>{user.username}</TextProfile>
        </ProfileDetailsItem>
        <Label>
          Email
        </Label>
        <ProfileDetailsItem>
          <FontAwesomeIcon color='#A287DB' icon={faEnvelope} />
          <TextProfile>{user.email}</TextProfile>
        </ProfileDetailsItem>
      </ProfileDetails>
      <EditBtn onClick={props.onEdit}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </EditBtn>
    </ProfileSection>
  );
}

export default Profile;
