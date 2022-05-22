import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        console.log(user);
        const name=user?.user?.displayName
        console.log(name);
        const currentUser = { email: email,name:name };
        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: "PUT",
                headers: {
                     'content-type': 'application/json' 
                    },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }, [user]);
    return [token]
}
export default useToken;