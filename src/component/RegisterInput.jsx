import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <>
      <h1 className="mb-1 text-3xl font-bold">REGISTER</h1>
      <form className="form">
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
          onClick={(e) => register(e, { name, email, password })}
          className="btn-submit"
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
