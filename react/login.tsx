import React, {useState} from "react";
import useLogin from '/react/api/useLoggin.ts';
import Button from './Button.ts'
import Input from './Input.ts'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <div>
      <Input 
        value={username} 
        onChange={(username) => {
          setUsername(username)
        }}
      />
      <Input
        value={password}
        secret
        onChange={(password) => {
          setPassword(password)
        }}
      />
      <Button onClick={() => {}} disabled>
        Submit
      </Button>
    </div>
  )
}

export default Login;
