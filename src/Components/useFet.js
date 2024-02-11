import { useState,useEffect } from "react";

const useFet = (url) => {
    const[data,setData]= useState(null)
    const[loadMessage,setLoadMessage] = useState(true)
    const[isError,setisError]=useState(null);

useEffect(()=>{
  const aborted = new AbortController();
  setTimeout(()=>{ 
    fetch(url)
    .then(res=>{
      if(!res.ok){
        throw Error('Couldnot fetch the data')
      }
       return res.json();
    })
    .then(data=>
      {
    setLoadMessage(false);
    setData(data)
        setisError(null)
    }).catch(err=>{
      if(err.name ==='Abort Error')
      {
        console.log('Fetch Aborted');

      }else{
      setLoadMessage(false)
      setisError(err.message);
      }
    })
    
  },1000)
  return ()=> aborted.abort();
},[url])
const updateData = (newData) => {
  setData(newData);
  return ( 
    
    {data,loadMessage,isError,updateData}
    
   );
}
}
 
export default useFet;