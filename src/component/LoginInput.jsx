import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <>
      <h1 className="mb-1 text-3xl font-bold">LOGIN</h1>
      <form className="form">
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
          onClick={() => login({ email, password })}
          className="btn-submit"
        >
          Login
        </button>
      </form>
    </>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
