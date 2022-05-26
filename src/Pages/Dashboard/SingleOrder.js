import React from 'react';

const SingleOrder = ({ order }) => {
    const { buyer, date, email, name, orderedQuantity, total, _id } = order;
    return (
        <div>
            <div class="card  shadow-xl flex md:flex-row  p-4 m-4">
                <div className='flex-auto mx-auto text-xl m-2 leading-relaxed'>
                    <p>Buyer Name : {buyer}</p>
                    <p>Buyer Email : {email}</p>
                    <p>Order Date : {date}</p>
                </div>
                <div className='flex-auto mx-auto text-xl m-2 leading-relaxed'>
                    <p>OrderId : {_id}</p>
                    <p>Product Name: {name}</p>
                    <p className='font-bold'>Quantity : {orderedQuantity}</p>
                    <p className='font-bold'>Total Cost : {total}</p>
                </div>
                <div className='flex-auto mx-auto'>
                    <button className='btn btn-primary mt-4'>Pending</button>
                    <button className='btn btn-primary mt-4'>Confirmed</button>
                </div>

            </div>

        </div>
    );
};

export default SingleOrder;