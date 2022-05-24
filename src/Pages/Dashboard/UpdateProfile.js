import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useProfile from '../Hooks/useProfile';

const UpdateProfile = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [updatedMessage, setUpdatedMessage] = useState({})
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = user.email;
        const name = data.name;
        const address = data.address;
        const phone = data.phone;
        const education = data.education;
        const userData = { name: name, address: address, phone: phone, education: education }
        fetch(`http://localhost:5000/users/profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {console.log(data);
                setUpdatedMessage(data);
            })
        reset()
    };
    if (updatedMessage.acknowledged) {
        navigate('/dashboard')
    }
    return (
        <div>
            <h1>Update Your Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='block my-2' placeholder='Your Name'  {...register("name")} required />
                <input className='block my-2' placeholder='Your Address'{...register("address")} />
                <input className='block my-2' placeholder='Your Phone'  {...register("phone")} />
                <input className='block my-2' placeholder='Your Education'  {...register("education")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default UpdateProfile;