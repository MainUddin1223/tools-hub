import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner/Spinner';
import useToken from '../Hooks/useToken';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const Social = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogle = (event) => {
        event.preventDefault()
        signInWithGoogle()
    }
    const [isAdmin] = useAdmin(user)
    const [token] = useToken(user)
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }
    return (

        <div>
            {
                loading && <Spinner></Spinner>
            }
            <button onClick={handleGoogle} className="input text-xl input-bordered w-full max-w-xl my-2 block mx-auto bg-secondary text-white"> Continue with Google</button>
        </div>
    );
};

export default Social;