import { useState,useEffect } from "react";

const useFetch = (url)=>{
const [blogs,setBlogs] = useState();
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw  Error("Couldn't connect to API server !");
            }
            res.json().then((data)=>{
                setBlogs(data);
                setIsPending(false);
                setError(null)
            });
        })
        .catch((err)=>{
            setIsPending(false);
            setError(err.message);
            // console.log(err);
        });    
    }
 ,[url])
 return {blogs,isPending,error};
}

export default useFetch;