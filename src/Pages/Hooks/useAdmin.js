import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [admin, setAdmin] = useState({})
    useEffect(() => {
        fetch(`https://nameless-tor-88457.herokuapp.com/users/makeadmin/${email}`, {
        })
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [email])
    const isAdmin = admin.role
    return [isAdmin]
}
export default useAdmin