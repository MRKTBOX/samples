import React from "react";
import useLogin from '/react/api/useLoggin.ts';
import Button from './Button.ts'
import Input from './Input.ts'

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
      <Button onClick={() => {}} disabled>
        Submit
      </Button>
    </div>
  )
}

export default Login;
