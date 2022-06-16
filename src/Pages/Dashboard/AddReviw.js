import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReviw = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [user, loading] = useAuthState(auth)

    const onSubmit = (data) => {
        console.log(user);
        const name = user?.displayName;
        const img = user?.photoURL;
        const rating = data.rating;
        const description = data.description
        const review = { name: name, rating: rating, description: description, img: img }
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
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{user?.name}</h2>
                    <div className="card-actions justify-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="block mx-auto ">
                                <label className="label ">
                                    <span className="label-text text-lg">Please say something about us</span>
                                </label>
                                <input type='text' className="input text-xl  input-bordered w-48 max-w-xl my-2 block"  {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Please say something about us'
                                    }
                                })} />

                                {errors.description?.type === 'required' && <span className='label-text-alt  text-xl  text-red-500'>{errors.description.message}</span>}
                            </div>
                            <div className="block mx-auto ">
                                <label className="label ">
                                    <span className="label-text text-lg">Rate us in 5</span>
                                </label>
                                <input type='number' className="input text-xl  input-bordered w-48 max-w-xl my-2 block"  {...register("rating", {
                                    required: {
                                        value: {
                                            max: 5,
                                            min: 1
                                        },
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

                                {errors.rating?.type === 'required' && <span className='label-text-alt  text-xl  text-red-500'>{errors.rating.message}</span>}
                                {errors.rating?.type === 'min' && <span className='label-text-alt text-xl  text-red-500'>{errors.rating.message}</span>}
                                {errors.rating?.type === 'max' && <span className='label-text-alt  text-xl  text-red-500'>{errors.rating.message}</span>}
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