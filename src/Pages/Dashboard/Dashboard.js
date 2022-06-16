import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Scrol from '../Shared/Scroll';
import Spinner from '../Spinner/Spinner';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    const email = user?.email;
    const [isAdmin] = useAdmin(email);
    const dashboardList = <>

        <li ><Link to='/dashboard' >My Profile</Link></li>
        {!isAdmin && <li ><Link to='review'>Review</Link></li>}
        {!isAdmin && <li><Link to='order'>My Order</Link></li>}
        {isAdmin && <li><Link to='manageOrder'>Manage Order</Link></li>}
        {isAdmin && <li><Link to='makeAdmin'>Admin Panel</Link></li>}
        {isAdmin && <li><Link to='manageProduct'>Manage Product</Link></li>}
        {isAdmin && <li><Link to='addProduct'>Add Product</Link></li>}
        <li><Link to='updateProfile'>Update Profile</Link></li>
    </>
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1500)
    }, [])
    if (!user) {
        navigate('/login')
    }
    return loader ? <Spinner></Spinner> : (
        <div className="drawer drawer-mobile">
            <Scrol></Scrol>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col ">
                <div>
                    <p htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">click</p>
                </div>
                {/* <!-- Page content here --> */}
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 pl-8 text-xl text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {dashboardList}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;