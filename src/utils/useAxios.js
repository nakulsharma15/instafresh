import { useState , useEffect } from 'react';
import axios from 'axios';

export default function useAxios(path) {
   
    const [ loading , setLoading ] = useState(true);
    const [ apiResponse , setApiResponse ] = useState({});

    useEffect(() => {
        (async () => {
            try{
                const res = await axios.get(path);
                setApiResponse(res.data);
                setLoading(false);
            }
            catch(err){
                console.log("Oops!, Something went wrong..." + err)
            }
        })()
    },[])

    return {apiResponse,loading};
}
