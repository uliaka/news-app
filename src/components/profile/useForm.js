import { useState, useEffect } from 'react';

const validate = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is required';
  } else if (!/^[a-zA-Z]+$/.test(values.firstName)) {
    errors.firstName = 'Invalid first name format';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  } else if (!/^[a-zA-Z]+$/.test(values.lastName)) {
    errors.lastName = 'Invalid last name format';
  }
  if (!values.username) {
    errors.username = 'Username is required';
  } else if (!/^[a-zA-Z]+$/.test(values.username)) {
    errors.username = 'Invalid username format';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  return errors;
};

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = () => {
    const errors = validate(values)
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      setIsValid(false)
    }
    setIsValid(true);
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return [values, handleChange, handleSubmit, errors, isValid]
};

export default useForm;
