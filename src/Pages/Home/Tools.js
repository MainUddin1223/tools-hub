import React from 'react';

const Tools = () => {
    return (
        <div>
            <div class="card w-96 bg-base-200 shadow-xl">
                <figure><img src="https://i.ibb.co/RSHQhGZ/Bi-directional.jpg?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        CS-50A
                        <div class="badge badge-secondary">Popular</div>
                    </h2>
                <div className='text-lg'>
                <p>The CS-50A is a Hall effect current sensor board capable of measuring Bi-directional current flow.</p>
                    <p>Available : 2000</p>
                    <p>Price : $ 2 / p</p>
                    <div className="flex">
                        <p>Minimum Order :</p><input type="number" value='200' className='w-2/4 rounded py-1 border-red-200 pl-4' />
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

export default Tools;