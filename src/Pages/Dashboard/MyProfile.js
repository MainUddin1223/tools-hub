import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../Hooks/useToken';

const MyProfile = () => {
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
    console.log(userDetail);
    return (
        <div>
            <h1>This is my profile</h1>
        </div>
    );
};

export default MyProfile;