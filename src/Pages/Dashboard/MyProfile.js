import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    const userEmail = user?.email;
    const [userDetail, setUserDetail] = useState({});
    const { name, email, address, education, phone } = userDetail
    const url = `http://localhost:5000/users/profile/${userEmail}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUserDetail(data)
            })
    }, [user])
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Email : {email}</p>
            <p>Address : {address}</p>
            <p>Education : {education}</p>
            <p>Phone : {phone}</p>
        </div>
    );
};

export default MyProfile;