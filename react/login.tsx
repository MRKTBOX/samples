import React {useState} from "react";

import useLogin from '/react/api/useLoggin';

import Button from '.'
import Input from '.'

function Login() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
        <Input 
          value={username} 
          onChange={() => setUserName(username)}
        />
      <Input
        value={password}
        secret
        onChange={() => setPassword(password)}
      />
      <Button onClick={() => {}} 
        disabled>
        Submit
      </Button>
    </div>
  )
}

export default Login;
