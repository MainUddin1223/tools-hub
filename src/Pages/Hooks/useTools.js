import { useEffect, useState } from "react"


const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    // const { data: tools, isErrorloading } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json))
    return [tools]
}
export default useTools