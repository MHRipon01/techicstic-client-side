import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./firebase/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
