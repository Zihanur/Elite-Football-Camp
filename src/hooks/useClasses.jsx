import {  useEffect, useState } from "react";

const useClasses = () => {
  const [classes, setClasses ] = useState([]);

  // const { loading } = useContext(AuthContext);
  // const { refetch, data: classes = [] } = useQuery({
  //   queryKey: ["classes"],
  //   enabled: !loading,
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/classes");
  //     return res.json();
  //   },
  // });
  // return [classes, refetch];

  useEffect(()=>{
    fetch('http://localhost:5000/classes')
    .then(res=>res.json())
    .then(data=>{
      setClasses(data)
    })
  },[])
  return [classes];
};

export default useClasses;
