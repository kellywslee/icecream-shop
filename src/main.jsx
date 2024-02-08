import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import AllIcecreams from "./pages/AllIceCreams.jsx";
import NewIcecream from "./pages/NewIceCreams.jsx";
import Icecream from "./pages/IceCream.jsx";
import MyCart from "./pages/MyCart.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/icecreams", element: <AllIcecreams /> },
      { path: "/icecreams/new", element: <NewIcecream /> },
      { path: "/icecreams/:id", element: <Icecream /> },
      { path: "/cart", element: <MyCart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
