import React, { useState, useEffect, useCallback } from "react";

import useLogin from './api/useLogin';

import Button from './Button';
import Input from './Input';

function Login() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <>
      <Input 
        value={username} 
        onChange={setUserName}
      />
      <Input
        value={password}
        onChange={setPassword}
        secret
      />
      <Button onClick={() => {}} disabled>
        Submit
      </Button>
    </>
  )
}

export default Login;
