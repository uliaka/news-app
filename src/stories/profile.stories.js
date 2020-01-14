import React from 'react';
import Profile from '../components/profile/Profile';
import { storiesOf } from '@storybook/react';

const user = {
  firstName: 'Firstname',
  lastName: 'Lastname',
  email: 'email@gmail.com',
  username: 'admin',
}

storiesOf('Profile', module)
  .add('Profile', () => <Profile user={user} />);

