import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Class = ({ singleClass }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelected = (item) => {
    const { _id, name, price, instructors, photo } = item;
    
    if (user && user.email) {
      const selectClass = {
        selectId: _id,
        name,
        price,
        instructors,
        photo,
        email: user.email,
      };
      fetch("http://localhost:5000/select", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setIsDisabled(true);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Selected",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
    } 
    else {
      Swal.fire({
        title: "Please Login First!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className=" bg-base-200 rounded-xl">
        <div
          className={`hero-content flex-col ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img
            src={singleClass?.photo}
            className="max-w rounded-lg shadow-xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{singleClass?.name}</h1>
            <p className="pt-2 text-2xl font-bold text-green-600">
              Instructor: {singleClass?.instructors}
            </p>
            <div className="flex justify-between py-4">
              <p className="text-lg">
                <span className="font-bold">Available Seats:</span> TODO
              </p>
              <p className="text-lg font-bold text-orange-600">
                Price: ${singleClass?.price}
              </p>
            </div>
            <button
              disabled={isDisabled}
              onClick={() => handleSelected(singleClass)}
              className={`bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-4 rounded-md ${
                isDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isDisabled ? "Selected" : "Select"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
