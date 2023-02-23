import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from 'routes';

const Logout = () => {
    localStorage.removeItem('token');

    return <Navigate to={AppRoutes.login} replace />
};

export default Logout;