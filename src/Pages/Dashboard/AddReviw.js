import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReviw = () => {
    const [user, loading] = useAuthState(auth)
    const userEmail = user?.email;
    const [userDetail, setUserDetail] = useState({});
    const { name, email } = userDetail;
    const url = `http://localhost:5000/users/makeadmin/${userEmail}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUserDetail(data)
            })
    }, [user])
    console.log(userDetail);
    if (loading) {
        return <>Loading</>
    }
    return (
        <div>
            <h1>hello</h1>
            <h1>{name} </h1>
            <h1>{email} </h1>
            <form action="">
                <select id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="vw">VW</option>
                    <option value="audi" selected>Audi</option>
                </select>
                <textarea name="" id="" cols="40" rows="2" placeholder='Feedback'></textarea>
                <input type="submit" value='Add review'/>
            </form>

        </div>
    );
};

export default AddReviw;