import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email;
    const [userDetail, setUserDetail] = useState({});
    const url = `http://localhost:5000/users/makeadmin/${email}`;
    useEffect(() => {
        fetch(url)
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