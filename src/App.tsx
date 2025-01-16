import { createBrowserRouter, RouterProvider } from "react-router";
import { Dashboard, Homelayout, UserDetail } from "./pages/dashboard";
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
        element: <Dashboard />,
      },
      {
        path: "user",
        element: <Dashboard />,
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
