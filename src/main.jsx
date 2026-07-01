import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./routers/Routers";
import ConnectivityContext from "./context/ConnectivityContext";
// import { createBrowserRouter } from "react-router";

// import RootLayout from "./layout/RootLayout";
// import Homepages from "./pages/Homepage/Homepages";
// import Timeline from "./pages/TimelinePage/Timeline";
// import StatusPage from "./pages/StatusPage/StatusPage";
// import NotFound from "./pages/NotFoundPage/NotFound";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConnectivityContext>
      <RouterProvider router={router}></RouterProvider>
    </ConnectivityContext>
  </StrictMode>,
);
