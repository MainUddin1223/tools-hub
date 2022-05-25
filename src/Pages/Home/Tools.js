import { faArrowAltCircleRight, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import useTools from '../Hooks/useTools';
import Spinner from '../Spinner/Spinner';

const Tools = () => {
    const [user, loading] = useAuthState(auth);
    const email = user?.email;
    const [isAdmin] = useAdmin(email)
    const [tools] = useTools();
    const limitTools = tools.slice(0, 6)
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h1 className='text-center text-4xl my-8'>Our Products</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-4'>
                {
                    limitTools.map(tool => <div key={tool._id} className=' mx-auto my-8' >
                        <div className='card w-full bg-base-200 shadow-xl'>
                            <figure><img src={`${tool.img}`} className='h-96 w-full' alt={tool.name} /></figure>
                            <div class="card-body h-96">
                                <h2 class="card-title">
                                    {tool.name}
                                </h2>

                                <div className='text-lg'>
                                    <p>{tool.description}</p>
                                    <p>Available : {tool.quantity}</p>
                                    <p>Price : $ {tool.price}/ p</p>
                                    <div className="flex">
                                        <p>Minimum Order : {tool.minimumQuantity} pice</p>
                                    </div>
                                </div>

                                <div class="card-actions justify-end">
                                    {isAdmin ? <button className='btn btn-accent btn-sm my-4 text-white' disabled><Link to={`/order/${tool._id}`}>Order Now</Link></button>
                                        : <button className='btn btn-accent btn-sm my-4 text-white'><Link to={`/order/${tool._id}`}>Order Now</Link></button>}
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <Link to='/tools' className='block my-4 text-2xl text-center text-blue-500'>Explore more <FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>

    );
};

export default Tools;