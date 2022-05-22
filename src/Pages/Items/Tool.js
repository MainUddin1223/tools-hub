import React from 'react';

const Tool = ({tool}) => {
    const {name,img,price,quantity,minimumQuantity,description}=tool
    return (
    
        <div className=' mx-auto my-8' >
                <div className='card w-96 bg-base-200 shadow-xl'>
                <figure><img src={img} className='h-96' alt={name} /></figure>
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
                    <button className='btn btn-accent btn-sm my-4 text-white'>Order Now</button>
                </div>
            </div>
                </div>
            </div>
        
    );
};

export default Tool;