import React from 'react';
import useTools from '../Hooks/useTools';
import Tool from './Tool';

const AllTools = () => {
    const [tools] = useTools();
    return (
        <div>
            <h1 className='text-center text-5xl my-8'>All Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-8 gap-4'>

                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default AllTools;