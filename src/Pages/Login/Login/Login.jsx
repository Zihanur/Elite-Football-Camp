import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [hidePass, setHidePass] = useState(true);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setError("");
    userLogin(data.email, data.password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(from, { replace: true });
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
            <h1 className="text-center text-3xl font-bold">Login Here</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
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
                  {...register("password", { required: true })}
                />
                <p
                  onClick={handlePasswordShow}
                  className="btn absolute z-10 end-0"
                >
                  {hidePass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </p>
              </div>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <span>
                Are you new{" "}
                <Link to={"/signup"} className="text-primary">
                  Sign Up
                </Link>
              </span>
            </div>
            <p className="text-red-500">{error}</p>
          </form> 
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Login;
