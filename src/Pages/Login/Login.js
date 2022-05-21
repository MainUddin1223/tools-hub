import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div class="card lg:w-2/4 mx-auto p-4 my-16 bg-base-100 shadow-xl">
                <h1 className='text-center text-3xl my-8'>Please Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className=' w-3/4 mx-auto'>
                    <div className=" ">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input placeholder='Your Email' class="input text-xl input-bordered w-full max-w-xl my-2 block"  {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                        {errors.email?.type === 'required' && <span className='label-text-alt text-xl  text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-xl  text-red-500'>{errors.email.message}</span>}
                    </div>


                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input type='password' placeholder='Your Password' class="input text-xl input-bordered w-full max-w-xl my-2 "  {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 Character'
                            }
                        })} />
                        {errors.password?.type === 'required' && <span className='label-text-alt text-xl  text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-xl text-red-500'>{errors.password.message}</span>}
                    </div>

                    <input type='submit' class="input  input-bordered bg-accent my-2 text-white text-xl w-full max-w-xl  " />
                </form>
                <div class="flex flex-col w-2/4 mx-auto my-4 border-opacity-50">
                    <div class="divider">OR</div>
                </div>
                <FontAwesomeIcon icon={["fab", "github"]} />
                <button class="input text-xl input-bordered w-2/4 max-w-xl my-2 block mx-auto bg-secondary"> <FontAwesomeIcon icon={["fab", "github"]} />Continue with Google</button>
            </div>

        </div>
    );
};

export default Login;