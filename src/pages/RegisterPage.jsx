import React from 'react';
// import { useNavigate } from 'react-router';
import RegisterInput from '../component/RegisterInput';

function RegisterPage() {
  // const navigate = useNavigate();
  const onRegister = ({ name, email, password }) => {
    console.log({ name, email, password });
    // navigate('/');
  };
  return (
    <div className="h-screen mx-4 mt-12 md:mx-24">
      <RegisterInput register={onRegister} />
    </div>
  );
}

export default RegisterPage;
