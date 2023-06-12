import { FaTrashAlt } from "react-icons/fa";
import useClasses from "../../../hooks/useClasses";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [allClass, refetch] = useClasses();

  const handleDelete = (singleClass) => {
    console.log(singleClass);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/${singleClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Admin has been deleted.", "success");
            }
          });
      }
    });
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
              <th>Status</th>
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
                <td>
                  {/* TODO: when instructor add new class then show */}
                  {!singleClass && (
                    <>
                      <span className="btn bg-green-600 rounded-full text-bold text-white ">
                        A
                      </span>
                      <span className="btn bg-red-600 rounded-full text-bold text-white ">
                        D
                      </span>
                    </>
                  )}
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
