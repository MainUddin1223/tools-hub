import { useQuery } from "react-query";

const useAdmin=(email)=>{
    // useEffect(()=>{
    //     fetch
    // },[])
    const { isLoading, error, data:admin } = useQuery('admin', () =>
    fetch(`http://localhost:5000/users/makeadmin/${email}`).then(res =>
      res.json()
    )
  )
  return [admin]
}
export default useAdmin