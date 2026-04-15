import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Stats from './pages/Stats';
import Timeline from './pages/Timeline';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
  {
    path: "/",
    element: <Home/>,
  },
   {
    path: "/details/:id",
    element: <FriendDetails />,
  },
   {
    path: "/stats",
    element: <Stats/>,
  },
   {
    path: "/timeline",
    element: <Timeline/>,
  },
   {
    path: "/*",
    element: <NotFound/>,
  },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
