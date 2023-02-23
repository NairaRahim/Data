import React, { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';

const PrivateRoute: FC<any> = ({ children }) => {
  const { user } = useContext(AuthContext)

  // console.log('user: ', user);

  if(user.token === null)
    return <Navigate to='/login' replace />

  return(
    <>
      {children}
    </>
  );
};

export default PrivateRoute;
