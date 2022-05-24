import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import Order from './Order';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order/${email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log('my order',data);
            })
    }, [user])
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            {
                orders.map(order => <Order key={order._id} order={order}></Order>)
            }
        </div>
    );
};

export default MyOrder;