import React, { FC } from 'react';
import './Logo.css';

const Logo: FC = () => {
  return (
    <div className='logo-pic'>
      <img
        className='logo-thumb'
        src={process.env.PUBLIC_URL + '/img/img-01.webp'}
        alt='logo'
      />
    </div>
  );
};

export default Logo;
