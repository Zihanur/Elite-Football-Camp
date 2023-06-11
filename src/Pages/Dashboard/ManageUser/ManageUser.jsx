import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";

const ManageUser = () => {
  const { data: users=[]} = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
console.log(users)
  return (
    <div className="w-full m-8 mx-auto max-h-full">
      <h1>Selected Classes: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="rounded-full"
                    style={{ height: "70px", width: "70px" }}
                    src={item?.photo}
                    alt=""
                  />
                </td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>Role</td>
                <td>
                  <button
                    className="bg-red-600 btn p-4 rounded-full text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
