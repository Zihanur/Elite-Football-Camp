import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./Routers/Routers.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
