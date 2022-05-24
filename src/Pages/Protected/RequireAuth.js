import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const RequireAuth = ({ children }) => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Spinner></Spinner>
    }
    if (!user) {
        navigate('/login')
    }
    return (
        children
    );
};

export default RequireAuth;