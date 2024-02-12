import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import NewIcecream from "./pages/NewIceCreams.jsx";
import IcecreamDetail from "./pages/IceCreamDetail.jsx";
import MyCart from "./pages/MyCart.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/icecreams", element: <Menu /> },
      {
        path: "/icecreams/new",
        element: (
          <ProtectedRoute requiredAdmin>
            <NewIcecream />
          </ProtectedRoute>
        ),
      },
      { path: "/icecreams/:id", element: <IcecreamDetail /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
