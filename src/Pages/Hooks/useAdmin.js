import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [admin, setAdmin] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/users/makeadmin/${email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [email])
    const isAdmin=admin.role
    return [isAdmin]
}
export default useAdmin