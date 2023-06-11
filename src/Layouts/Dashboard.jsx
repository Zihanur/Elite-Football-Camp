import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  const isInstructor = false;
  const isStudent = false;
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
                <h1 className="font-bold text-2xl mb-4">Admin Dashboard</h1>
                <li>
                  <button>
                    <Link to={"/dashboard/manageclass"}>Manage Classes</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to={"/dashboard/manageuser"}>Manage User</Link>
                  </button>
                </li>
              </>
            )}

            {isInstructor && (
              <>
              <h1 className="font-bold text-2xl mb-4">Instructor Dashboard</h1>
                <li>
                  <Link to={"/dashboard/addclass"}>Add A Class</Link>
                </li>
                <li>
                  <Link to={"/dashboard/instructorclass"}>
                    My Classes
                  </Link>
                </li>
              </>
            )}

            {isStudent && (
              <>
              <h1 className="font-bold text-2xl mb-4">Student Dashboard</h1>
                <li>
                  <Link to={"/dashboard/myclasses"}>
                    My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/myenrolled"}>
                    My Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/payment"}>Payment</Link>
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
