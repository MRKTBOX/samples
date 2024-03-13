import React, { useState } from "react";
import useLogin from '/react/api/useLoggin';
import Button from '.';
import Input from '.';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Input
        value={userName} 
        onChange={(value) => {setUserName(value)}}
      />
      <Input
        value={password}
        onChange={(value) => {setPassword(value)}}
        secret
      />
      <Button onClick={() => {}} disabled>
        Submit
      </Button>
    </div>
  )
}

export default Login;
