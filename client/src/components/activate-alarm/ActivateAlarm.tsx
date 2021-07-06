import { observer } from 'mobx-react-lite';
import React, { FC, useContext } from 'react';
import { Context } from '../..';
import './ActivateAlarm.css';

const ActivateAlarm: FC = () => {
  const { store } = useContext(Context);

  return (
    <div
      className='container-activate'
      style={{ backgroundColor: store.user.isActivated ? '#57b846' : 'red' }}>
      <span className='activate-span'>
        {store.user.isActivated
          ? 'Account verified'
          : 'Activate mail send on your email, verify your account'}
      </span>
    </div>
  );
};

export default observer(ActivateAlarm);
