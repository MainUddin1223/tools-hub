import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReviw = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [user, loading] = useAuthState(auth)

    const onSubmit = (data) => {
        const name = user?.name;
        const img=user?.img;
        const rating = data.rating;
        const description = data.description
        const review = { name: name, rating: rating, description: description ,img:img}
        fetch('https://nameless-tor-88457.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Added Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                else {
                    toast.error('Failed to add review', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
        reset()

    }
    if (loading) {
        return <>Loading</>
    }
    return (
        <div>
            <h1 className='text-center text-4xl my-8'>Add a review</h1>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{user?.name}</h2>
                    <div class="card-actions justify-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="block mx-auto ">
                                <label className="label ">
                                    <span className="label-text text-lg">Add rating according to our service</span>
                                </label>
                                <input class="input text-xl  input-bordered w-48 max-w-xl my-2 block"  {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Please rating us 1 to 5'
                                    },
                                    min: {
                                        value: 1,
                                        message: `Rating must be more above 0 `
                                    }, max: {
                                        value: 5,
                                        message: 'Rating must be 5 or less'
                                    }
                                })} />

                                {errors.quantity?.type === 'required' && <span className='label-text-alt  text-xl  text-red-500'>{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'min' && <span className='label-text-alt text-xl  text-red-500'>{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'max' && <span className='label-text-alt  text-xl  text-red-500'>{errors.quantity.message}</span>}
                            </div>
                            <div className="block mx-auto ">
                                <label className="label ">
                                    <span className="label-text text-lg">Add review according to our service</span>
                                </label>
                                <input class="input text-xl  input-bordered w-48 max-w-xl my-2 block"  {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Please add your review'
                                    }
                                })} />

                                {errors.quantity?.type === 'required' && <span className='label-text-alt  text-xl  text-red-500'>{errors.quantity.message}</span>}
                            </div>
                            <input type="submit" value='Add Review' className='input bg-accent text-white' />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReviw;