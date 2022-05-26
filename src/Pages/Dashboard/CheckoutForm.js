import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const { total } = order
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ total })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })

    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
            setCardError(error?.message || '');
        
//confirm payment
const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
    clientSecret,
    {
      payment_method: {
        card: card,
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    },
  );
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '20px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className='text-xl text-red-500 my-2'>{cardError}</p>
            <button className=' block btn btn-sm m-4' type="submit" disabled={!stripe || clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;