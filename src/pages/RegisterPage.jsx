import React from 'react';
// import { useNavigate } from 'react-router';
import RegisterInput from '../component/RegisterInput';

function RegisterPage() {
  // const navigate = useNavigate();
  const onRegister = (e, { name, email, password }) => {
    e.preventDefault();
    if (password.length > 5) {
      console.log({ name, email, password });
    }
    // navigate('/');
  };
  return (
    <>
      <RegisterInput register={onRegister} />
    </>
  );
}

export default RegisterPage;
