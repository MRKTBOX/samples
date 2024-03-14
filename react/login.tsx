import React from "react";

import useLogin from '/react/api/useLoggin';

import Button from '.'
import Input from '.'

function Login() {

  return (
    <div>
        <Input 
          
          value={'username'} 
          onChange={() => {}}
        />
      <Input
        value={'password'}
        secret
      />
      <Button onClick={() => {}} 
        disabled>
        Submit
      </Button>
    </div>
  )
}

export default Login;
