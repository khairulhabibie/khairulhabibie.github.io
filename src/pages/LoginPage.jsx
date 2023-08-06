import React from 'react';
import LoginInput from '../component/LoginInput';

function LoginPage() {
  const onLogin = (e, { email, password }) => {
    e.preventDefault();
    console.log('ini page login', { email, password });
  };
  return (
    <>
      <LoginInput login={onLogin} />
    </>
  );
}

export default LoginPage;
