import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/settings",
    element: <SettingsPage />
  }
]);

export default function App() {
  return <RouterProvider router={router} ></RouterProvider>
} 