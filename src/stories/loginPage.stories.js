import React from 'react';
import Login from '../components/login/Login.js';
import { storiesOf } from '@storybook/react';


export default {
  title: 'login',
};

storiesOf('Login', module)
  .add('Login', () => <Login />);