import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const userEmail = useRef();
    const [adminData, setAdminData] = useState({});
    const url = `http://localhost:5000/users/${email}`;
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
            })
    }
    console.log(adminData);

    const makeAdmin = () => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully add to admin panel', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }
    // const { data: user, isErrorloading } = useQuery('user', () => fetch(url).then(res => res.json()));
    // console.log(user);
    // if (email) {
    //     fetch(``, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(currentUser)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }
    return (
        <div>
            {
                adminData !== '' && <div>
                    <p>{adminData?.displayName}</p>
                    <p>{adminData?.email}</p>
                    <button onClick={makeAdmin}>make Admin</button>
                </div>
            }
            <input type="email" ref={userEmail} />
            <button onClick={getEmail}>Add an Admin</button>
        </div>
    );
};

export default MakeAdmin;