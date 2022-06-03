import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    const findUser = user?.user;
    console.log(findUser);
    console.log(findUser?.displayName);
    useEffect(() => {
        const name = findUser?.displayName
        const email = findUser?.email;
        const currentUser = { email: email, name: name };
        if (email) {
            fetch(`https://nameless-tor-88457.herokuapp.com/users/${email}`, {
                method: "PUT",
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