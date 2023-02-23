import React, { FC, createContext, useState } from 'react';

// interface IAuthContext {
//   id: number;
//   email: string;
//   token: string
// }

export const AuthContext = createContext<any>(null);

export const AuthContextProvider:FC<any> = ({ children }) => {
  // const [user, setUser] = useState<IAuthContext | null>(null);
  const [user, setUser] = useState({token: localStorage.getItem('token')});

  return(
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};