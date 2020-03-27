import React from 'react';

import UsersList from '../components/UsersList';

function Users() {
  const USERS = [
    {
      id: 'u1',
      name: 'Umesh shrestha',
      image:
        'https://avatars2.githubusercontent.com/u/59211403?s=400&v=4',
      places: 10
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
