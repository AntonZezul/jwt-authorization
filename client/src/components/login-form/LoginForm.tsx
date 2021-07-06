import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';
import { Context } from '../..';
import './LoginForm.css';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { store } = useContext(Context);

  return (
    <div className='login-form'>
      <span className='login-form__title'>Member Login</span>

      <div className='login-form__wrap-input'>
        <img
          className='login-form__icon'
          src={process.env.PUBLIC_URL + 'icons/mail.svg'}
          alt='password'
        />
        <input
          className='login-form__input'
          type='text'
          name='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className='login-form__wrap-input'>
        <img
          className='login-form__icon'
          src={process.env.PUBLIC_URL + 'icons/key.svg'}
          alt='password'
        />
        <input
          className='login-form__input'
          type='password'
          name='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button
        className='login-form__button'
        onClick={
          isLogin
            ? () => store.login(email, password)
            : () => store.registration(email, password)
        }>
        {isLogin ? 'Login' : 'Create your Account'}
      </button>
      <div
        className='flag-registration'
        onClick={() => setIsLogin((prev) => !prev)}>
        {isLogin ? 'Create your Account' : 'Log In'}
      </div>
    </div>
  );
};

export default observer(LoginForm);
