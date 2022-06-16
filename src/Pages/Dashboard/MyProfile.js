import { faEnvelope, faLocationDot, faSchool, faSquarePhoneFlip, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    const userEmail = user?.email;
    const [userDetail, setUserDetail] = useState({});
    const { name, email, address, education, phone, img } = userDetail
    const url = `https://nameless-tor-88457.herokuapp.com/users/profile/${userEmail}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUserDetail(data)
            })
    }, [user,url])
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='md:flex justify-center mx-auto md:mx-8 mt-16'>
            <div className='m-24 '>
                {img ? <img src={img} alt="" className='w-48' /> : <FontAwesomeIcon icon={faUser} className="text-9xl" />}
            </div>
            <div className='m-8'>
                <h1 className='text-5xl my-4 uppercase'> {name}</h1>
                <p className='text-xl uppercase'><span className='mx-4 text-2xl'><FontAwesomeIcon icon={faLocationDot} /></span>{address}</p>
                <p className='text-3xl my-4'><FontAwesomeIcon icon={faEnvelope} />  {email}</p>
                <p className='text-3xl my-4'><span className='text-3xl mr-4'><FontAwesomeIcon icon={faSquarePhoneFlip} /></span> {phone}</p>
                <p className='text-3xl my-4'><span className='text-3xl mr-4'><FontAwesomeIcon icon={faSchool} /></span> {education}</p>

            </div>
        </div>
    );
};

export default MyProfile;