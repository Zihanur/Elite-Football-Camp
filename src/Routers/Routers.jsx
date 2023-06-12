import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import InstructorClasses from "../Pages/Dashboard/InstructorClasses/InstructorClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "myenrolled",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      //admin
      {
        path: "manageclass",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "manageuser",
        element: <ManageUser></ManageUser>,
      },

      //Instructor
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "instructorclasses",
        element: <InstructorClasses></InstructorClasses>,
      },
    ],
  },
]);
