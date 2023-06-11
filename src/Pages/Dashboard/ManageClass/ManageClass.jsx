import { FaTrashAlt } from "react-icons/fa";
import useClasses from "../../../hooks/useClasses";

const ManageClass = () => {
  const [allClass] = useClasses();

  const handleDelete = (singleClass) => {
    console.log(singleClass);
  };

  return (
    <div className="w-full ms-8 mx-auto max-h-full">
      <h1 className="text-3xl font-bold text-center my-4">
        Manage All Classes
      </h1>
      <h1>Total Classes: {allClass.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allClass.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="rounded-lg"
                    style={{ height: "70px", width: "70px" }}
                    src={singleClass?.photo}
                    alt=""
                  />
                </td>
                <td>{singleClass?.name}</td>
                <td>{singleClass?.instructors}</td>
                <td>
                  {parseInt(singleClass?.total_seat) -
                    parseInt(singleClass?.totalStudents)}
                </td>
                <td>{singleClass?.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(singleClass)}
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

export default ManageClass;
