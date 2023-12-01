import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import UsersTable from "./components/UsersTable";
import UserCard from "./components/UserCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <UsersTable />,
      },
      {
        path: "/users",
        element: <UsersTable />,
      },
      {
        path: "/user/:id",
        element: <UserCard />,
      },
    ],
  },
]);

export default router;
