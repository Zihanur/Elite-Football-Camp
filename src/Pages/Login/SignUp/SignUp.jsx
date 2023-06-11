import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { createUser, userProfileUpdate, googleLogin } =
    useContext(AuthContext);
  const [hidePass, setHidePass] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setError();
    console.log(data);
    createUser(data.email, data.password)
      .then(() => {
        userProfileUpdate(data.name, data.photo).then(() => {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Signup Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setError("");
    googleLogin()
      .then(() => {  
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signup Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePasswordShow = () => {
    setHidePass(!hidePass);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-8">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-center text-3xl font-bold">SignUp Here</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={hidePass ? "password" : "text"}
                  placeholder="password"
                  className="input input-bordered w-full "
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/,
                  })}
                />
                <p
                  onClick={handlePasswordShow}
                  className="btn absolute z-10 end-0"
                >
                  {hidePass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </p>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Required min 6 digit</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">Required max 20 digit</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password have one uppercase, one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                {...register("confirmpassword", { required: true })}
              />
              {errors.confirmpassword && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                {...register("photo", { required: true })}
              />
              {errors.photo && <span>This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
            </div>
            <div>
              <span>
                You have an account{" "}
                <Link to={"/login"} className="text-primary">
                  Login
                </Link>
              </span>
            </div>
          </form>
          <p className="text-red-500">{error}</p>
          <div className="divider">OR</div>
          <div className="flex justify-center mb-3">
            <button
              onClick={handleGoogleLogin}
              className="items-center btn btn-outline py-1 px-4"
            >
              <img
                style={{ height: "40px", width: "40px" }}
                src="https://i.ibb.co/yW1wzqG/google-logo.png"
              />
              Goolle
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
