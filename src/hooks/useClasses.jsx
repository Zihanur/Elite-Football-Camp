import { useEffect, useState } from "react";

const useClasses = () => {
  const [allClass, setAllClass] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:5000/classes')
    .then(res=>res.json())
    .then(data=>{
      setAllClass(data)
    })
  },[])
  return [allClass];
};

export default useClasses;