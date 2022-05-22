import React from 'react';
import useTools from '../Hooks/useTools';

const Tools = () => {
    const [tools] = useTools();
    const limitTools = tools.slice(0, 6)
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                limitTools.map(tool => <div key={tool._id} className=' mx-auto my-8' >
                    <div className='card w-96 bg-base-200 shadow-xl'>
                    <figure><img src={`${tool.img}`} className='h-96' alt={tool.name} /></figure>
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
                        <button className='btn btn-accent btn-sm my-4 text-white'>Order Now</button>
                    </div>
                </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Tools;