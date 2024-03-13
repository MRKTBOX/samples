import React {useState} from "react";

import useLogin from '/react/api/useLoggin';

import Button from '.'
import Input from '.'

type User = {
  userName: string;
  password: string;
}
  
  
function Login() {

  const [user, setUser] = useState<User>({userName:"", password: ""})

  return (<div>
    <Input 
      value={'username'} 
      onChange={(value) => {setUser({...user, userName: value})}}
    />
    <Input
      value={'password'}
      onChange={(value)  => {setUser({...user, password: value})}}
      secret
    />
    <Button onClick={() => {}} disabled>
      Submit
    </Button>
  </div>
  )
}

export default Login;
