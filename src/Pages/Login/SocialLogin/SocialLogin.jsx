import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const logedUser = result.user;
        const insertUser = {
          name: logedUser.displayName,
          email: logedUser.email,
          photo: logedUser.photoURL,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(insertUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
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
  );
};

export default SocialLogin;
