import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Spinner from '../Spinner/Spinner';

const Tool = ({ tool }) => {
    const [user, loading] = useAuthState(auth)
    const { name, img, price, quantity, minimumQuantity, description } = tool;
    const email = user.email
    const [isAdmin] = useAdmin(email)
    if (loading) {
        return <Spinner></Spinner>
    }
    return (

        <div className=' mx-auto my-8' >
            <div className='card w-full bg-base-200 shadow-xl'>
                <figure><img src={img} className='h-96 w-full' alt={name} /></figure>
                <div class="card-body h-96">
                    <h2 class="card-title">
                        {name}
                    </h2>

                    <div className='text-lg'>
                        <p>{description}</p>
                        <p>Available : {quantity}</p>
                        <p>Price : $ {price}/ p</p>
                        <div className="flex">
                            <p>Minimum Order : {minimumQuantity} pice</p>
                        </div>
                    </div>

                    <div class="card-actions justify-end">
                        {isAdmin ? <button className='btn btn-accent btn-sm my-4 text-white' disabled>Order Now</button> :
                            <button className='btn btn-accent btn-sm my-4 text-white'><Link to={`/order/${tool._id}`}>Order Now</Link></button>}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tool;