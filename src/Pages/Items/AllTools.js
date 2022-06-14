import React from 'react';
import useTools from '../Hooks/useTools';
import Scrol from '../Shared/Scroll';
import Spinner from '../Spinner/Spinner';
import Tool from './Tool';

const AllTools = () => {
    const [tools, isFetching] = useTools();
    return isFetching ? <Spinner></Spinner> : (
        <div>
            <Scrol></Scrol>
            <h1 className='text-center text-5xl my-8'>All Products</h1>
            {/* <div className='z-10 bg-sky-400 relative rounded-2xl p-8 text-black  mx-auto my-4 grid md:grid-cols-2 grid-cols-1' > */}
            <div className='flex flex-row flex-wrap w-3/4 mx-auto'>
                {
                    tools.map((tool, index) => <Tool key={tool._id} tool={tool} index={index}></Tool>)
                }
            </div>
        </div>
    );
};

export default AllTools;