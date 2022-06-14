import React from 'react';
import worker from "../../images/graph.png"

const Step = () => {
    return (

      <div className='bg-no-repeat bg-right  bg-none min-h-screen bg-cover ' style={{backgroundImage:`url(${worker})`}}>
                <ul class="steps steps-vertical text-center pl-8 py-4 text-center">
                    <li data-content="✓" class="step step-primary text-2xl text-">Register</li>
                    <li class="step text-2xl step-primary">Choose plan</li>
                    <li class="step step-primary text-2xl">Purchase</li>
                    <li class="step step-primary text-2xl">Receive Product</li>
                </ul>
            </div>
    );
};

export default Step;