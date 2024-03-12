import { useCallback } from 'react';

import { User } from '../types';

interface useLoginProps {
  domain : string;
}

function useLogin({ domain } : useLoginProps) {

  const submitLogin = useCallback(async (
    username : string,
    password : string,
  ) : User => {
    // TODO: implement API call
    return {
      name : 'Brendan Eich',
    };
  }, []);

  return {
    submitLogin,
  };
}

export default useLogin;
