import React, { useState, useEffect } from "react";

import useLogin from '/react/api/useLoggin';

import Button from '.'
import Input from '.'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (username.length != 0 && password.length != 0) {
      setValid(true);
    }
  }, [username, password])

  return (<div>
    <form>
      <lable>username</lable>
      <Input 
        value={username} 
        onChange={(e) => { setUsername(e.target.value) }}
        disabled={false}
        secret={false}
      />
      <label>password</label>
      <Input
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
        disabled={false}
        secret={true}
      />
      <Button type="submit" onClick={() => {}}
        disabled={ valid ? false : true }
      >
        Submit
      </Button>
    </form>
  </div>
  )
}

export default Login;
