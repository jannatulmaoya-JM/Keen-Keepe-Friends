import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../layouts/MainLayout";
import FriendDetails from "../pages/FriendDetails";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Stats from "../pages/Stats";
import Timeline from "../pages/Timeline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "details/:id", 
        element: <FriendDetails />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  }
]);