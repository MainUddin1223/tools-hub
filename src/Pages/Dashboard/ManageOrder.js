import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import SingleOrder from './SingleOrder';

const ManageOrder = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://nameless-tor-88457.herokuapp.com/order`;
        fetch(url, {
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    if(!orders){
        <Spinner></Spinner>
    }
    return (
        <div>
            <h1 className='text-4xl my-8 text-center'>Total Placed Order {orders.length}</h1>
            <div>
                {
                    orders.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
                }
            </div>
        </div>
    );
};

export default ManageOrder;