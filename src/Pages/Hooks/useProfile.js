import { useEffect, useState } from "react";


const useProfile = (user) => {
    const email = user?.email;
    const [userDetail, setUserDetail] = useState({});
    const url = `https://nameless-tor-88457.herokuapp.com/users/makeadmin/${email}`;
    useEffect(() => {
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserDetail(data)
            })
    }, [user])
    return [userDetail]
}
export default useProfile