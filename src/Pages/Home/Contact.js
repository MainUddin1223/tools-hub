import React from 'react';

const Contact = () => {
    return (
        <div className='w-full card shadow-xl md:w-3/4 my-8 lg:w-2/4 mx-auto'>
            <h1 className='text-4xl mx-auto my-8'>Contact Us</h1>
            <div class="">
                <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xl m-2 block mx-auto" />
                <input type="text" placeholder="Your Email" class="input input-bordered w-full max-w-xl block m-2 mx-auto " />
                <input type="text" placeholder="Your Location" class="input input-bordered w-full max-w-xl block m-2  mx-auto" />
                <input type="text" placeholder="Your Message" class="input input-bordered w-full max-w-xl h-48 block m-2 mx-auto" />
                <button className='block mx-auto btn btn-accent my-4'>Contact Us</button>
            </div>
        </div>
    );
};

export default Contact;