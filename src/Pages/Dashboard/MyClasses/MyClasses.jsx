import useSelect from "../../../hooks/useSelect";

const MyClasses = () => {
  const [select] = useSelect();
  return (
    <div className="w-full m-8 mx-auto max-h-full">
      <h1>Selected Classes:{select.length}</h1>
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
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              {/* TODO */}
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
