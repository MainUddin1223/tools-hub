import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const RequireAuth = ({ children }) => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />


    }
    return (
        children
    );
};

export default RequireAuth;