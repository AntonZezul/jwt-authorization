import React, { FC, useState } from 'react';
import { IUser } from '../../models/IUser';
import UserService from '../../services/UserService';
import './UsersList.css';

const UsersList: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='users'>
      <button className='users-list__button' onClick={() => getUsers()}>
        Get Users
      </button>
      <div className='users-list'>
        {users.map((user) => {
          return (
            <div className='users-list__item' key={user.email}>
              {user.email}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
