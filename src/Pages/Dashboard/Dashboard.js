import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const dashboardList = <>

        <li ><Link to='/dashboard' >My Profile</Link></li>
        <li ><Link to='review'>Review</Link></li>
        <li><Link to='order'>My Order</Link></li>
        <li><Link to='manageOrder'>Manage Order</Link></li>
        <li><Link to='makeAdmin'>Admin Panel</Link></li>
        <li><Link to='manageProduct'>Manage Product</Link></li>
        <li><Link to='addProduct'>Add Product</Link></li>
    </>

    return (
        <div class="drawer drawer-mobile">

            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content flex flex-col ">
                <div>
                    <p for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">click</p>
                    <h1 className='text-center text-4xl my-4'> {user?.displayName}'s Dashboard</h1>
                    <Outlet />
                </div>
                {/* <!-- Page content here --> */}
                {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

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