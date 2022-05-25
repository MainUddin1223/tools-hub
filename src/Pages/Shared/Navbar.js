import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate=useNavigate()
    const logout = () => {
        signOut(auth)
        navigate('/login')
    }
    const navList =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/tools'>Tools</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>

            {user && <li><Link to='/dashboard'>Dashboard</Link></li>}

            {
                user ?
                    <li><button onClick={logout}>Log out</button></li> :
                    <li><Link to='/login'>Login</Link></li>}
        </>

    return (
        <div className=' bg-primary px-8'>
            <div class="navbar ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 text-xl shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <Link to="/" className=' font-bold  text-xl'>HM ELECTRONICS</Link>
                </div>
                <div class="navbar-end hidden lg:flex ">
                    <ul class="menu menu-horizontal p-0 text-xl">
                        {navList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;