import React from "react";

import useLogin from './api/useLogin';

import Button from './Button';
import Input from './Input';

function Login() {

  return (
    <>
      <Input 
        value={'username'} 
        onChange={() => {}}
      />
      <Input
        value={'password'}
        secret
      />
      <Button onClick={() => {}} disabled>
        Submit
      </Button>
    </>
  )
}

export default Login;
