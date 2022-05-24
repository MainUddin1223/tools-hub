import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import AdminTable from './AdminTable';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const [admins, setAdmins] = useState([])
    const userEmail = useRef();
    const [adminData, setAdminData] = useState({});
    const url = `http://localhost:5000/users/makeadmin/${email}`;
    const getEmail = (event) => {
        event.preventDefault();
        const getEmail = userEmail.current.value
        setEmail(getEmail)
    }
    if (email) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdminData(data)
                setSuccess(true)
            })
    }

    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
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
            })
        setSuccess(false)
    }
    useEffect(() => {
        fetch('http://localhost:5000/users/admin',)
            .then(res => res.json())
            .then(data => {
                setAdmins(data)
            })
    }, [admins])
    return (
        <div>
            {
                !success ? <></> : <div>
                    <p>{adminData?.name}</p>
                    <p>{adminData?.email}</p>
                    <button onClick={makeAdmin}>make Admin</button>
                </div>
            }
            <input type="email" ref={userEmail} />
            <button onClick={getEmail} className='btn btn primary'>Add an Admin</button>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
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