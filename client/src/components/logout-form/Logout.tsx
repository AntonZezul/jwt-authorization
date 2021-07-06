import { observer } from 'mobx-react-lite';
import React, { FC, useContext } from 'react';
import { Context } from '../..';
import UsersList from '../users-list/UsersList';
import './Logout.css';

const Logout: FC = () => {
  const { store } = useContext(Context);

  return (
    <div className='logout'>
      <span className='user-info'>User email: {store.user.email}</span>
      <UsersList />
      <button className='logout-button' onClick={() => store.logout()}>
        Logout
      </button>
    </div>
  );
};

export default observer(Logout);
