import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelect = () => {
  const { user,loading } = useContext(AuthContext);
    const { refetch, data: select = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/select?email=${user?.email}`)
            return res.json();
        },
    })
    return [select, refetch]
};

export default useSelect;