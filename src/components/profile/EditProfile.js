import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Types from '../../redux/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import useInputChange from './useInputChange';
import useForm from './useForm'


const EditContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 100%;
`
const EditInputLabel = styled.div`
  font-size: 16px;
`
const EditInputSection = styled.div`
  border-bottom: 1px solid #D1D1D1;
  margin: 10px;
  width: 100%;
`
const EditInput = styled.input`
  border: none;
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`
const SaveEditBtn = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  background: #A287DB;
  color: white;
  cursor: pointer;
`
const ErrorSection = styled.div`
  color: red;
  width: 100%;
  font-size: 12px;
`
const EditProfile = (props) => {
  const { user } = props
  const [inputs, handleInputChange, handleSubmit, errors, valid] = useForm({ ...user })
  const dispatch = useDispatch();

  const onSubmit = () => {
    handleSubmit()
    if (valid) {
      dispatch({ type: Types.UPDATE_USER_INFO, payload: inputs })
      props.onSubmit()
    }
  }

  return (
    <EditContainer>
      <EditInputSection>
        <EditInputLabel>First name</EditInputLabel>
        <EditInput
          value={inputs.firstName}
          type='text'
          name='firstName'
          onChange={handleInputChange}
        />
        {errors.firstName && (
          <ErrorSection>{errors.firstName}</ErrorSection>
        )}
      </EditInputSection>
      <EditInputSection>
        <EditInputLabel>Last Name</EditInputLabel>
        <EditInput
          type='text'
          name='lastName'
          value={inputs.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && (
          <ErrorSection>{errors.lastName}</ErrorSection>
        )}
      </EditInputSection>
      <EditInputSection>
        <EditInputLabel>Username</EditInputLabel>
        <EditInput
          type='text'
          name='username'
          value={inputs.username}
          onChange={handleInputChange}
        />
        {errors.username && (
          <ErrorSection>{errors.username}</ErrorSection>
        )}
      </EditInputSection>
      <EditInputSection>
        <EditInputLabel>Email</EditInputLabel>
        <EditInput
          type='email'
          name='email'
          value={inputs.email}
          onChange={handleInputChange}
        />
        {errors.email && (
          <ErrorSection>{errors.email}</ErrorSection>
        )}
      </EditInputSection>
      <SaveEditBtn onClick={(e) => onSubmit(e)}>
        Save
        <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faSave} />
      </SaveEditBtn>
    </EditContainer>
  );
}

export default EditProfile;

