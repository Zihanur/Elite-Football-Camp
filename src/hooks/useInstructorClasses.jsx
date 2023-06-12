import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructorClasses = () => {
  const { user, loading } = useContext(AuthContext);
    const { refetch, data: instructorclasses = [] } = useQuery({
        queryKey: ['instructorclasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/instructorclasses?name=${user?.name}`)
            return res.json();
        },
    })
    return [instructorclasses, refetch]
};

export default useInstructorClasses;