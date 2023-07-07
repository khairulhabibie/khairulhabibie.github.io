import React from 'react';
import LoginInput from '../component/LoginInput';

function LoginPage() {
  const onLogin = ({ email, password }) => {
    console.log({ email, password });
  };
  return (
    <div className="h-screen mx-4 mt-12 md:mx-24">
      <LoginInput login={onLogin} />
    </div>
  );
}

export default LoginPage;
