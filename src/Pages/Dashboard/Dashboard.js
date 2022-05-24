import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Spinner from '../Spinner/Spinner';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const email = user?.email;
    const [admin] = useAdmin(email);
    const isAdmin = admin?.role;
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
    console.log(user);
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div class="drawer drawer-mobile">

            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content flex flex-col ">
                <div>
                    <p for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">click</p>
                    <h1 className='text-center text-4xl my-4'> {user?.displayName}'s Dashboard</h1>
                </div>
                {/* <!-- Page content here --> */}
                {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 pl-8 text-xl text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {dashboardList}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;