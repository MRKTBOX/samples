import React, {useState, useEffect} from "react";
import useLogin from '/react/api/useLoggin.ts';
import Button from './Button.ts'
import Input from './Input.ts'

function Login() {
  const { submitLogin } = useLoggin()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [valid, setValid] = useState(false)

  useEffect(() => {
    // if inputs are non empty -> valid
    if(username.length && password.length) {
      setValid(!valid)
    }
  }, [valid])
  
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
      <Button 
        onClick={() => {
          submitLogin(username, password)
        }} 
        disabled={valid ? false : true}>
        Submit
      </Button>
    </div>
  )
}

export default Login;
