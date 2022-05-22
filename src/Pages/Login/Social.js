import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner/Spinner';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogle = (event) => {
        event.preventDefault()
        signInWithGoogle()
    }
    if (user) {
        console.log(user);
    }

    return (

        <div>
            {
                loading && <Spinner></Spinner>
            }
            <button onClick={handleGoogle} class="input text-xl input-bordered w-full max-w-xl my-2 block mx-auto bg-secondary text-white"> Continue with Google</button>
        </div>
    );
};

export default Social;