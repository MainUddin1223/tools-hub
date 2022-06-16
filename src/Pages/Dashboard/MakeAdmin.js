import { signOut } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import AdminTable from './AdminTable';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [admins, setAdmins] = useState([]);
    const userEmail = useRef();
    const [adminData, setAdminData] = useState({});
    const url = `https://nameless-tor-88457.herokuapp.com/users/makeadmin/${email}`;
    const getEmail = (event) => {
        event.preventDefault();
        const getEmail = userEmail.current.value
        setEmail(getEmail)
        userEmail.current.value = "";
    }
    if (email) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdminData(data)
            })
    }

    const makeAdmin = () => {
        fetch(`https://nameless-tor-88457.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully add to admin panel', {
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
                    toast.error('Already an Admin', {
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
    }


    useEffect(() => {
        fetch('https://nameless-tor-88457.herokuapp.com/users/admin',)
            .then(res => res.json())
            .then(data => {
                setAdmins(data)
            })
    }, [admins]);
    let makingAdmin
    if (adminData) {
        makingAdmin = <p className='text-xl mx-2'>{adminData?.email}</p>
    }
    return (
        <div>
            <input type="email" className='w-2/4 px-4 py-2 m-2 rounded text-xl' ref={userEmail} />
            <button onClick={getEmail} className='btn primary'>Find a User</button>
            <div className='flex my-8'>
                {
                    makingAdmin
                }
                <button className='btn btn-accent' onClick={makeAdmin}>make Admin</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admins.map(admin => <AdminTable key={admin._id} admin={admin} id={admin._id}></AdminTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;