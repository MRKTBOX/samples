import React from "react";

import useLogin from '/react/api/useLoggin';

import Button from '.'
import Input from '.'

function Login() {

  return (<div>
    <form>
      <lable>username</lable>
      <Input 
        value={'username'} 
        onChange={() => {}}
        placeholder="Please enter your username."
      />
      <label>password</label>
      <Input
        value={'password'}
        secret
        placeholder="Please enter your password."
      />
      <Button type="submit" onClick={() => {}} disabled>
        Submit
      </Button>
    </form>
  </div>
  )
}

export default Login;
