import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

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
            .then(data => {
                console.log(data);
                setUpdatedMessage(data);
            })
        reset()
    };
    if (updatedMessage.acknowledged) {
        navigate('/dashboard')
    }
    return (
        <div>
            <h1 className='text-center text-3xl my-8'>Update Your Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/4 md:w-3/4 w-full mx-auto">
                <p className='my-2 text-xl'>Update your Name</p>
                <input className='block my-2 w-full p-2 rounded text-lg' placeholder='Your Name'  {...register("name")} required />
                <p className='my-2 text-xl'>Please update your address.</p>
                <p className='my-2 text-xl'>It will help us to reach you</p>
                <input className='block my-2 w-full p-2 rounded text-lg' placeholder='Your Address'{...register("address")} required />
                <p className='my-4 text-xl '> Update your current Phone number.</p>
                <input className='block my-2 w-full p-2 rounded text-lg' placeholder='Your Phone'  {...register("phone")} required />
               <p className='text-xl my-4'>From where have you done your graduation??</p>
                <input className='block my-2 w-full p-2 rounded text-lg' placeholder='Your Education'  {...register("education")} required />
                <input type="submit" value='Update Profile' className="input bg-primary text-xl block my-4 mx-auto"/>
            </form>
        </div>
    );
};

export default UpdateProfile;