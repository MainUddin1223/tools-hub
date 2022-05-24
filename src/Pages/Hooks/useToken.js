import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    const findUser = user?.user;
    console.log(findUser);
    console.log(findUser?.displayName);
    useEffect(() => {
        const name = findUser?.displayName
        const email = findUser?.email;
        console.log(name,email);
        const currentUser = { email: email, name: name };
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
    }, [findUser]);
    return [token]
}
export default useToken;