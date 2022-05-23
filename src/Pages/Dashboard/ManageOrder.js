import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageOrder = () => {
    const [user] = useAuthState(auth)
    const email = user.email;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/order`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1>This is Order{orders.length}</h1>
        </div>
    );
};

export default ManageOrder;