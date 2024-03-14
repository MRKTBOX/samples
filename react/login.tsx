import React {useEffect, useState} from "react";

import useLogin from '/react/api/useLoggin';

import Button from '.'
import Input from '.'

function Login() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [valid, SetValid] = useState(false);

  function validateUserInfo(username, password) {
    if(username !== "" && passsword !== "") {
     setValid(true);
    }
  }

   useEffect(() => {
     validateUserInfo(username, password);
     }, [validateUserInfo])

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
        
        disabled = {() => validateUserInfo(username, password)}>
        Submit
      </Button>
    </div>
  )
}

export default Login;
