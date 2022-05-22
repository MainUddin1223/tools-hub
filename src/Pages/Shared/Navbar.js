import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const navList =
        <>
        </>
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth)
    }
    return (
        <div className=' bg-primary'>
            <div class="navbar lg:w-3/4 mx-auto">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 text-xl shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/tools'>Tools</Link></li>
                            <li><Link to='/order'>Order</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className=' font-bold  text-xl'>HM ELECTRONICS</Link>
                </div>
                <div class="navbar-end hidden lg:flex ">
                    <ul class="menu menu-horizontal p-0 text-xl">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/tools'>Tools</Link></li>
                        <li><Link to='/order'>Order</Link></li>
                        {
                            user ?
                                <button onClick={logout}>Log out</button> :
                                <li><Link to='/login'>Login</Link></li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;