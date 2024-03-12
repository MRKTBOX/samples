import React, { useState, useEffect, useCallback } from "react";

import useLogin from './api/useLogin';

import Button from './Button';
import Input from './Input';

function Login() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [valid, setValid] = useState(false);

  const evaluateValid(username : string, password : string) => {
    if(username!=='' && password!=='') {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  useEffect(() => {
    evaluateValid(username, password);
  }, [username, password]);
  
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
      <Button onClick={() => {}} disabled={!valid}>
        Submit
      </Button>
    </>
  )
}

export default Login;
