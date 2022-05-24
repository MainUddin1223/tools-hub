import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReviw = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email;
    console.log(email);
    const [userDetail, setUserDetail] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/users/profile/${email}`)
            .then(res => res.json())
            .then(data => {
                setUserDetail(data)
            })
    }, [user])
    if (loading) {
        return <>Loading</>
    }
    return (
        <div>
            <h1>Review Our Service </h1>

        </div>
    );
};

export default AddReviw;