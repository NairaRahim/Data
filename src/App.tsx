import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'routes';
import { AuthContextProvider } from 'context/AuthContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
