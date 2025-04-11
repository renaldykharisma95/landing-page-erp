import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../containers/login/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    }
])