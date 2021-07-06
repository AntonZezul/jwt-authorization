import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect } from 'react';
import { Context } from '.';
import LoginForm from './components/login-form/LoginForm';
import './App.css';
import Logo from './components/logo/Logo';
import Logout from './components/logout-form/Logout';
import ActivateAlarm from './components/activate-alarm/ActivateAlarm';
import Loading from './components/loading/Loading';

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  return (
    <div className='wrapper'>
      <div className='container-login'>
        {store.isAuth ? <ActivateAlarm /> : null}
        <div className='wrap-login'>
          {!store.isAuth ? (
            store.isLoading ? (
              <Loading />
            ) : (
              <>
                <Logo />
                <LoginForm />
              </>
            )
          ) : (
            <Logout />
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(App);
