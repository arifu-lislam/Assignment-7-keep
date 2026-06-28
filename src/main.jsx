import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

import RootLayout from "./layout/RootLayout";
import Homepages from "./pages/Homepage/Homepages";
import Timeline from "./pages/TimelinePage/Timeline";
import StatusPage from "./pages/StatusPage/StatusPage";
import NotFound from "./pages/NotFoundPage/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Homepages></Homepages>,
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/status",
        element: <StatusPage></StatusPage>,
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
