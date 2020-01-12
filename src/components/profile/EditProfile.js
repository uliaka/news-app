import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Types from '../../redux/types';


const EditContainer = styled.form`
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
`
const EditInputLabel = styled.div`
  font-size: 20px;
`
const EditInputSection = styled.div`
  border-bottom: 1px solid #D1D1D1;
  text-align: left;
  margin: 20px;
`
const EditInput = styled.input`
  border: none;
  width: 100%;
  margin: 10px 0 10px 0;
  font-size: 15px;
  line-height: 20px;
  &:focus {
    outline: none;
  }
`
const SaveEditBtn = styled.div`
  margin: 20px;
  border: none;
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  background: #A287DB;
  color: white;
  cursor: pointer;
`
const EditProfile = (props) => {
  const user = useSelector(state => state.user)
  const [editUser, setEditUser] = useState({ ...user });
  const dispatch = useDispatch();

  //dispatch({ type: Types.UPDATE_USER_INFO, payload: editUser })

  return (
    <EditContainer>
      <EditInputSection>
        <EditInputLabel>First name</EditInputLabel>
        <EditInput
          type='text'

        />
      </EditInputSection>
      <EditInputSection>
        <EditInputLabel>Last Name</EditInputLabel>
        <EditInput
          type='text'
        />
      </EditInputSection>
      <SaveEditBtn >
        Save
      </SaveEditBtn>
    </EditContainer>
  );
}

export default EditProfile;

