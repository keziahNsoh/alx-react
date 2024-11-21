import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </form>
    </>
  );
};

export default Login;

