import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <>
      <h1 className="mb-1 text-3xl font-bold">REGISTER</h1>
      <form action="" className="form">
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="nama"
          className="input"
        />
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="email"
          className="input"
        />
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="password"
          className="input"
        />
        <button
          type="submit"
          onClick={() => register({ name, email, password })}
          className="p-1 text-xl text-white bg-green-600 hover:bg-green-900"
        >
          Register
        </button>
      </form>
    </>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
