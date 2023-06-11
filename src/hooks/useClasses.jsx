import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  //const [allClass, setAllClass] = useState([]);

  const { loading } = useContext(AuthContext);
    const { refetch, data: clsses = [] } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json();
        },
    })
    return [clsses, refetch]
  
  // useEffect(()=>{
  //   fetch('http://localhost:5000/classes')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     setAllClass(data)
  //   })
  // },[])
  // return [allClass];
};

export default useClasses;