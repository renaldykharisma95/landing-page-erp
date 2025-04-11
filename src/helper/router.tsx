import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "../App";
import Login from "../containers/login/login";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
//   {
//     basename: "landing-page-erp",
//   }
);
