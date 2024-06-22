import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./index.css";

// page components
import Camarades from "./pages/Camarades";
import Home from "./pages/Home";
import Depute from "./pages/Depute";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/camarades",
        element: <Camarades />,
      },
      {
        path: "/camarades/:slug",
        element: <Depute />,
      },
    ],
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
