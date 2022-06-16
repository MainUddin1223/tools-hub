import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    const findUser = user?.user;
    useEffect(() => {
        const name = findUser?.displayName
        const email = findUser?.email;
        const image = findUser?.photoURL;
        const currentUser = { email: email, name: name, image: image };
        if (email) {
            fetch(`https://nameless-tor-88457.herokuapp.com/users/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }
    }, [findUser]);
    return [token]
}
export default useToken;