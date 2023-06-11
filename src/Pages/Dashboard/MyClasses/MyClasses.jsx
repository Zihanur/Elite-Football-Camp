import { FaTrashAlt } from "react-icons/fa";
import useSelect from "../../../hooks/useSelect";
import Swal from "sweetalert2";

const MyClasses = () => {
  const [select, refetch] = useSelect();

  const handleDelete = (item) => {
    console.log(item)
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/select/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full m-8 mx-auto max-h-full">
      <h1>Selected Classes: {select.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Instructors</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {select.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="rounded-2xl"
                    style={{ height: "70px", width: "70px" }}
                    src={item?.photo}
                    alt=""
                  />
                </td>
                <td>{item?.name}</td>
                <td>{item?.instructors}</td>
                <td>{item?.price}</td>
                <td>
                  <button className="bg-orange-400 btn btn-sm rounded-sm text-white">
                    Pay
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
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

export default MyClasses;
