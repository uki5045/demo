import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Login, Profile, Signup } from "./layouts";
import { Bank, Main, NotFound, Service, Trade } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/bank",
        element: <Bank />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/trade",
        element: <Trade />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
