import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = false;
  const isInstructor = false;
  const isStudent = true;
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isAdmin && (
              <>
                <li>
                  <NavLink to={"/dashboard/manageclasses"}>
                    Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageuser"}>Manage User</NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/payment"}>Payment</NavLink>
                </li>
              </>
            )}

            {isInstructor && (
              <>
                <li>
                  <NavLink to={"/dashboard/addclass"}>Add A Class</NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/instructorclass"}>
                    My Classes
                  </NavLink>
                </li>
              </>
            )}

            {isStudent && (
              <>
                <li>
                  <NavLink to={"/dashboard/myclasses"}>
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/myenrolled"}>
                    My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/payment"}>Payment</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
