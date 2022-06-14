import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const Navbar = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)
    const userEmail = user?.email;
    const [userDetail, setUserDetail] = useState({});
    const { name, email, address, education, phone, img } = userDetail
    // const url = `https://nameless-tor-88457.herokuapp.com/users/profile/${userEmail}`;
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserDetail(data)
    //         })
    // }, [user, url])
    // if (loading) {
    //     return <Spinner></Spinner>
    // }
    const logout = () => {
        signOut(auth)
        navigate('/login')
    }
    const navList =
        <>
            <li> <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive && 'border-2 border-sky-500'
                }
            >
                Home
            </NavLink></li>
            <li> <NavLink
                to="/tools"
                className={({ isActive }) =>
                    isActive && 'border-2 border-sky-500'
                }
            >
                Tools
            </NavLink></li>
            <li> <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                    isActive && 'border-2 border-sky-500'
                }
            >
                Portfolio
            </NavLink></li>
            <li> <NavLink
                to="/blogs"
                className={({ isActive }) =>
                    isActive && 'border-2 border-sky-500'
                }
            >
                Blogs
            </NavLink></li>
            {user && <li> <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    isActive && 'border-2 border-sky-500'
                }
            >
                Dashboard
            </NavLink></li>}
            {
                !user ? <li><Link to='/login'>Login</Link></li> :
                    <li> <Link to='/login' onClick={logout}>Logout</Link></li>
            }
            <li>

            </li>
        </>

    return (
        <div className='text-white font-bold px-8 bg-accent sticky top-0 z-50'>
            <div class="navbar font-sans">
                <div class="navbar-start">
                    <div class="dropdown text-black">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 text-xl shadow bg-base-100 rounded-box w-52">
                            {navList}

                        </ul>
                    </div>
                    <img src='https://i.ibb.co/4Wqm9Z2/logo-removebg-preview.png' alt='logo' className='h-20 mx-4' />
                </div>
                <div class="navbar-end">
                    <div class="dropdown">
                        {
                            user && <label tabindex="0" class=" lg:hidden">
                                {user?.photoURL ? <label for="my-modal-3"><img className='rounded-full w-16' src={user?.photoURL} alt="" /></label> : <FontAwesomeIcon icon={faUser} className='text-3xl p-4 bg-white rounded-full' />}
                            </label>
                        }
                    </div>
                </div>
                <div class="navbar-end hidden lg:flex ">
                    <ul class="menu menu-horizontal p-0 text-xl">
                        {navList}
                    </ul>

                </div>
                {user && <label tabindex="0" class="hidden lg:flex">
                    {user?.photoURL ? <label for="my-modal-3"><img className='rounded-full w-16' src={user?.photoURL} alt="" /></label > : <label for="my-modal-3"><FontAwesomeIcon icon={faUser} className='text-3xl p-4 bg-white rounded-full' /></label >}

                </label>}
            </div>
            <div>

                {/* <input type="checkbox" id="my-modal-3" class="modal-toggle " />
                <div class="modal">
                    <div class="modal-box relative h-96">
                        <div className='ml-4 '>
                            {user?.photoURL ?<img className='mx-auto rounded-full w-16 block' src={user?.photoURL} alt="" /> : <FontAwesomeIcon icon={faUser} className='text-5xl bg-accent text-white p-4 rounded-full block mx-auto'/>}
                            <h1 className='text-2xl font-bold my-4'>{name ? name : 'User'}</h1>
                            <p className='text-xl my-2'>Address : {address}</p>
                            <p className='text-xl my-2'>Email : {email}</p>
                            <p className='text-xl my-2'>Number : {phone}</p>
                        </div>
                        <label onClick={logout} for="my-modal-3" class="  right-2 top-2">
                            Logout
                        </label>
                        <label onClick={ navigate('/')}  for="my-modal-3" class="  right-2 top-2">
                            Logout
                        </label>
                        <label for="my-modal-3" class="btn btn-sm right-4 absolute top-4">X</label>
                    </div>
                </div> */}
            </div >
        </div >
    );
};

export default Navbar;