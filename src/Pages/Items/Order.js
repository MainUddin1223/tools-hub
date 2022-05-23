import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Order = () => {
    const { orderId } = useParams();
    const [tool, setTool] = useState({})
    const [user] = useAuthState(auth);
    const url = `http://localhost:5000/tools/${orderId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setTool(data);
        })
    // const { data: tool, isErrorloading } = useQuery('tool', () => fetch(url,).then(res => res.json()));
    const [date, setDate] = useState(new Date().toLocaleString())

    // const {name,img,quantity,minimumQuantity,price}=tool
    const { name, img, quantity, minimumQuantity, price, description } = tool;
    const buyerName = user.displayName;
    const buyerEmail = user.email
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const orderedQuantity = data.quantity;
        const total = price * orderedQuantity;
        const order = { buyer: buyerName, email: buyerEmail, date: date, name: name, orderedQuantity: orderedQuantity, total }
        fetch(`http://localhost:5000/order`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order added ,Please Complete your payment', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    };
    return (
        <div>
            <div className=' w-3/4 mx-auto shadow-xl '>
                <h1 class="text-2xl font-bold text-center my-8"> Order preview</h1>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div className='card w-3/4'>
                            <figure><img src={img} className='h-48' alt={name} /></figure>
                            <div class="card-body ">
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
                            </div>
                        </div>
                        <div className='w-3/4'>

                            <hr className='w-1' />
                            <h1 class="text-xl font-bold"> Buyer Name: {user?.displayName}</h1>
                            <p class="py-3 font-bold">Email:{user?.email}</p>
                            <p class="py-3">Order Date:{date}</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="block mx-auto ">
                                    <label className="label ">
                                        <span className="label-text text-xl">Order Quantity</span>
                                    </label>
                                    <input class="input text-xl  input-bordered w-full max-w-xl my-2 block"  {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Please Input Product Quantity'
                                        },
                                        min: {
                                            value: minimumQuantity,
                                            message: `Minimum order ${minimumQuantity}`
                                        }, max: {
                                            value: quantity + 1,
                                            message: 'You cant order more than Stored quantity '
                                        }
                                    })} />

                                    {errors.quantity?.type === 'required' && <span className='label-text-alt lg:ml-8 text-xl  text-red-500'>{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'min' && <span className='label-text-alt lg:ml-8 text-xl  text-red-500'>{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'max' && <span className='label-text-alt lg:ml-8 text-xl  text-red-500'>{errors.quantity.message}</span>}
                                </div>
                                <input type="submit" value='Order Now' className='input bg-accent text-white' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;