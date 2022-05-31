import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Spinner from '../Spinner/Spinner';
import top_sales from '../../images/top-sales-removebg-preview.png'
import available from '../../images/abailable-removebg-preview.png'

const Tool = ({ tool,index }) => {
    const [user, loading] = useAuthState(auth)
    const { name, img, price, quantity, minimumQuantity, description } = tool;
    const email = user?.email
    const [isAdmin] = useAdmin(email)
    if (loading) {
        return <Spinner></Spinner>
    }
    return (

        <div className='z-10 bg-sky-400 relative rounded-2xl p-8 text-black  mx-auto my-4 grid md:grid-cols-2 grid-cols-1'  >
                                    <div className='absolute left-5 md:bottom-5 w-32 z-0'>
                            {index%3!==1 ? <img src={available} className='  ' alt="" /> : <img src={top_sales} alt="" />}
                        </div>
                        <figure className='z-40'><img src={`${tool.img}`} className='w-96 mx-auto ' alt={tool.name} /></figure>
                        <div className='card w-full p-4'>
                            <div class="font-mono">
                                <h2 class="text-4xl font-bold ">
                                    {tool.name}
                                </h2>

                                <div className='text-xl my-2'>
                                    <p className='py-2'>{tool.description}</p>
                                    <p className='py-2 text-2xl font-bold'>Available : {tool.quantity}</p>
                                        <p className='py-2 text-2xl font-bold'>Minimum Order : {tool.minimumQuantity} piece</p>
                                        <p className='py-2 text-2xl font-bold'>Price : $ {tool.price}</p>
                                </div>

                                <div class="card-actions ">
                                    {isAdmin ? <button className='btn  text-xl btn-accent  my-4 text-white' disabled><Link to={`/order/${tool._id}`}>Order Now</Link></button>
                                        : <button className='btn  text-xl   my-4 text-white'><Link to={`/order/${tool._id}`}>Order Now</Link></button>}
                                </div>
                            </div>
                        </div>
        </div>

    );
};

export default Tool;