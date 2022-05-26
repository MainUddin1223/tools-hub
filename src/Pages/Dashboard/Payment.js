import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1YwABOaxx3XkdtHfJrfjpqDq60T8zTQJHHCg5K4YOCoMTKc8oMOOPvj5UgVkMbgw9bSvJwfjlv3XDaAbjr5cWm00czNdqVS0');
const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    const { name, totalQuantity, _id, total, buyer } = order
    return (
        <div>
            <div className='shadow-xl w-3/4 mx-auto'>
                <h1 className='text-2xl m-2'>Hello , {buyer}</h1>
                <p className='text-xl m-2'>You have purchase {name}</p>
                <p className='text-xl m-2'>The quantity is {totalQuantity}</p>
                <p className='text-xl m-2 font-bold'>Please pay ${total}</p>

            </div>
            <div class="card flex-shrink-0 mx-auto w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;