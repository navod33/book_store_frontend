import React, { useEffect, useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';

const UserLogin = () => {

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex gap-[200px] items-center align-middle'>
        <RegistrationForm/>
        <LoginForm/>
      </div>
    </div>
  );
};

export default UserLogin;
