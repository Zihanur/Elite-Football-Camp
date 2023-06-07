import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const bars = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/instructors"}>Instructors</NavLink>
      </li>
      <li>
        <NavLink to={"/classes"}>Classes</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div>
        <div className="navbar bg-base-300">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <FaBars></FaBars>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {bars}
              </ul>
            </div>
            <Link to={"/"} className="btn btn-ghost text-3xl">
              Elite Footbal Camp
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{bars}</ul>
          </div>
          <div className="navbar-end">
            {user && (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar"
                  title={user?.displayName}
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20"
                >
                  <li>
                    <a>Profile Update</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
