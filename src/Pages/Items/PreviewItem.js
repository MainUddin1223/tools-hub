import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const PreviewItem = () => {
    const { orderId } = useParams();
    const [tool, setTool] = useState({})
    // const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const url = `https://nameless-tor-88457.herokuapp.com/tools/${orderId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setTool(data);
        })
    return (
        <div>
<h1 className='text-5xl'>{orderId}</h1>
<h1 className='text-5xl'>{tool.name}</h1>

        </div>
    );
};

export default PreviewItem;