
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Social from './Social';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import useAdmin from '../Hooks/useAdmin';
import useToken from '../Hooks/useToken';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user)
    const [isAdmin] = useAdmin(user)
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    if (loading) {
        return <Spinner></Spinner>
    }
    let from = location.state?.from?.pathname || "/";
    if (isAdmin) {
        navigate(from, { replace: true })
    }

    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className="card lg:w-2/4 mx-auto p-4 my-16 bg-base-100 shadow-xl">
                <h1 className='text-center text-3xl my-8'>Please Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className=' w-3/4 mx-auto'>
                    <div className="block mx-auto ">
                        <label className="label lg:ml-8">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input placeholder='Your Email' className="input text-xl mx-auto input-bordered w-full max-w-xl my-2 block"  {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                        {errors.email?.type === 'required' && <span className='label-text-alt lg:ml-8 text-xl  text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt lg:ml-8 text-xl  text-red-500'>{errors.email.message}</span>}
                    </div>


                    <div>
                        <label className="label">
                            <span className="label-text text-xl lg:ml-8">Password</span>
                        </label>
                        <input type='current-password' placeholder='Your Password' className="input text-xl input-bordered block mx-auto w-full max-w-xl my-2 "  {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 Character'
                            }
                        })} />
                        {errors.password?.type === 'required' && <span className='label-text-alt text-xl  lg:ml-8 text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-xl lg:ml-8 text-red-500'>{errors.password.message}</span>}
                    </div>
                    {error && <p className='text-xl my-2 text-center text-red-500'>Please check your email or password</p>}
                    <input type='submit' value='Login' className="input  input-bordered bg-accent mt-8 my-2 block mx-auto text-white text-xl w-full max-w-xl  " />
                    <p className='text-xl ml-6 my-4'>Forgat password? <span className='text-blue-500'>Reset password</span> </p>
                    <div className="flex flex-col w-2/4 mx-auto my-4 border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <Social></Social>
                </form>
                <div className="mx-auto w-3/4">
                    <p className='ml-6 text-xl my-4'>New here? <Link to='/signup' className='text-blue-500'>Creat an account</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;