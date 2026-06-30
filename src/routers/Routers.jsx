import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepages from "../pages/Homepage/Homepages";
import Timeline from "../pages/TimelinePage/Timeline";
import StatusPage from "../pages/StatusPage/StatusPage";
import NotFound from "../pages/NotFoundPage/NotFound";
import DetailsPages from "../components/DetailsPage/DetailsPages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Homepages></Homepages>,
      },
      {
        path: "/friendsDetails/:id",
        element: <DetailsPages></DetailsPages>,
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
