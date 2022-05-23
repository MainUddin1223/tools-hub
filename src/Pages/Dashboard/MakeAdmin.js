import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const userEmail = useRef();
    const role = 'admin';
    const url = `http://localhost:5000/user/${email}`;
    const currentUser = { role: role };
    const getEmail = (event) => {
        event.preventDefault();
        const getEmail = userEmail.current.value
        setEmail(getEmail);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
            <input type="email" ref={userEmail} />
            <button onClick={getEmail}>make admin</button>
        </div>
    );
};

export default MakeAdmin;