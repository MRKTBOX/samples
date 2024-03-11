import React from 'react';

interface InputProps {
  value? : string;
  onChange? : (value : string) => void;
  disabled? : boolean;
  secret? : boolean;
};

function Input(props : InputProps) {

  // TODO: implement props
  return (<input />);
}

export default Input;
