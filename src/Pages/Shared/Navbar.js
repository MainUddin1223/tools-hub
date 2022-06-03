import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const logout = () => {
        signOut(auth)
        navigate('/login')
    }
    const navList =
        <>
            <li> <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive && 'border-2 border-red-500'
                }
            >
                Home
            </NavLink></li>
            <li> <NavLink
                to="/tools"
                className={({ isActive }) =>
                    isActive && 'border-2 border-red-500'
                }
            >
                Tools
            </NavLink></li>
            <li> <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                    isActive && 'border-2 border-red-500'
                }
            >
                Portfolio
            </NavLink></li>
            <li> <NavLink
                to="/blogs"
                className={({ isActive }) =>
                    isActive && 'border-2 border-red-500'
                }
            >
                Blogs
            </NavLink></li>
            {user && <li> <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    isActive && 'border-2 border-red-500'
                }
            >
                Dashboard
            </NavLink></li>}
            {
                !user &&
                <li><Link to='/login'>Login</Link></li>
            }
        </>

    return (
        <div className='bg-sky-200 px-8 sticky top-0 z-50'>
            <div class="navbar font-serif">
                <div class="navbar-start">
                    <div class="dropdown">
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
                        <label tabindex="0" class=" lg:hidden">
                        <label for="my-modal-3"><img className='rounded-full w-8' src={user?.photoURL} alt="" /></label>
                        </label>
                    </div>
                </div>
                <div class="navbar-end hidden lg:flex ">
                    <ul class="menu menu-horizontal p-0 text-xl">
                        {navList}
                    </ul>

                </div>
                <label for="my-modal-3" class="hidden lg:flex"><img className='rounded-full w-16' src={user?.photoURL} alt="" /></label>
            </div>
            <div>

            <input type="checkbox" id="my-modal-3" class="modal-toggle " />
            <div class="modal">
                <div class="modal-box  relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div >
        </div >
    );
};

export default Navbar;