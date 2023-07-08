import React from 'react';
import LoginInput from '../component/LoginInput';

function LoginPage() {
  const onLogin = ({ email, password }) => {
    console.log({ email, password });
  };
  return (
    <>
      <LoginInput login={onLogin} />
    </>
  );
}

export default LoginPage;
