import React from 'react';

interface ButtonProps {
  onClick? : () => void;
  disabled? : boolean;
  children? : React.Node;
};

function Button(props : ButtonProps) {

  // TODO: implement props
  return (<button />);
}

export default Button;
