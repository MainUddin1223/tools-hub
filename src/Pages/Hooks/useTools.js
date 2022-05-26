import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";


const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://nameless-tor-88457.herokuapp.com/tools', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setTools(data))
    }, [tools])
    return [tools]
}
export default useTools