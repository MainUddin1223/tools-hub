import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAProduct = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('https://nameless-tor-88457.herokuapp.com/tools', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Item Added Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            reset()
    }
    return (
        <div>
            <h1>This is add product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/4 md:w-3/4 w-full mx-auto">
                <p className='my-2 text-xl'>Product Name</p>
                <input className='block my-2 w-full p-2 rounded text-lg' placeholder='Product name'  {...register("name")} required />
                <p className='my-2 text-xl'>Product Image</p>
                <input className='block my-2 w-full p-2 rounded text-lg' placeholder='Product Image'{...register("img")} required />
                <p className='my-4 text-xl '> Product Description</p>
                <input className='block my-2 w-full p-2 rounded text-lg' placeholder='Product description'  {...register("description")} required />
                <p className='text-xl my-4'>Quantity</p>
                <input className='block my-2 w-full p-2 rounded text-lg' placeholder='Quantity'  {...register("quantity")} required />
                <p className='text-xl my-4'>Minimum Order Quantity</p>
                <input className='block my-2 w-full p-2 rounded text-lg' placeholder='Minimum Order'  {...register("minimumQuantity")} required />
                <p className='text-xl my-4'>Price</p>
                <input className='block my-2 w-full p-2 rounded text-lg' placeholder='Product Price'  {...register("price")} required />
                <input type="submit" value='Add product' className="input bg-primary text-xl block my-4 mx-auto" />
            </form>
        </div>
    );
};

export default AddAProduct;