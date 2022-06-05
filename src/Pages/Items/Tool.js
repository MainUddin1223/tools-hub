import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Spinner from '../Spinner/Spinner';
import top_sales from '../../images/top-sales-removebg-preview.png'
import available from '../../images/abailable-removebg-preview.png'
import tagBanner from '../../images/tag_banner-removebg-preview.png'

const Tool = ({ tool, index }) => {
    const [user, loading] = useAuthState(auth)
    const { name, img, price, quantity, minimumQuantity, description } = tool;
    const email = user?.email
    const [isAdmin] = useAdmin(email)
    if (loading) {
        return <Spinner></Spinner>
    }
    return (


        <div className='mx-auto'>
            <div className=' relative  m-4 text-gray p-4 shadow-sm hover:shadow-xl bg-sky-200 rounded-xl'>
                <Link to={`/order/${tool._id}`}>
                    <div className='absolute -top-8 right-0 z-0'>
                        <p className='absolute text-orange-900 top-8 right-4 pt-4 z-1 font-bold '>Available: {tool.quantity}</p>
                        <img src={tagBanner} alt="" className='mt-0 w-56 h-28' />
                    </div>
                    <div className='p-4'>
                        <img src={img} alt="" className='w-48 h-48 mt-16' />
                        <div className='font-bold text-orange-900'>
                            <h1 className='text-2xl '>{name}</h1>
                            <p className='text-lg'>$ {price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    );
};

export default Tool;