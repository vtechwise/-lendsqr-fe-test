import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {  Homelayout, User, UserDetail } from "./pages/dashboard";
import "./styles/main.scss";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        path: "user",
        element: <User />,
      },
      {
        path: "user-detail",
        element: <UserDetail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
