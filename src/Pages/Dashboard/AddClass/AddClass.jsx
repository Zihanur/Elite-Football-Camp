import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {
      name,
      photo,
      instructors,
      total_seat,
      price,
      totalStudents,
      activities,
    } = data;
    if (user) {
      const newClass = {
        name,
        photo,
        instructors,
        total_seat,
        price,
        totalStudents,
        activities,
      };
      fetch("http://localhost:5000/classes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newClass),
      })
        .then((req) => req.json())
        .then((data) => {
          if (data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="w-full max-h-full ms-6">
      <h1 className="text-3xl font-bold text-center my-4">
        Add Your New Class
      </h1>
      <div className="card  w-full  shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className=" md:flex md:gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Class Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className=" md:flex md:gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Instructor (Your Name)</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                {...register("instructors", { required: true })}
              />
              {errors.instructors && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Total Seat</span>
              </label>
              <input
                type="number"
                placeholder="Total Seat number"
                className="input input-bordered"
                {...register("total_seat", { required: true })}
              />
              {errors.total_seat && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className=" md:flex md:gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Total Students</span>
              </label>
              <input
                type="number"
                placeholder="Total Students"
                className="input input-bordered"
                {...register("totalStudents", { required: true })}
              />
              {errors.totalStudents && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Activities</span>
            </label>
            <input
              type="text"
              placeholder="Activities"
              className="input input-bordered"
              {...register("activities", { required: true })}
            />
            {errors.activities && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">ADD</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
