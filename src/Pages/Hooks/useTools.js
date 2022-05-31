import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";


const useTools = () => {
    const { data: tools, isLoading, error, isFetching } = useQuery('tool', () => fetch('https://nameless-tor-88457.herokuapp.com/tools', {
    }).then(res => res.json()));

    return [tools, isLoading,isFetching]
}
export default useTools