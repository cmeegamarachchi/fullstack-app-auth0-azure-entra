import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { ConfigurationProvider } from "./providers/ConfigurationProvider";


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
  return <ConfigurationProvider>
          <RouterProvider router={router} ></RouterProvider>
        </ConfigurationProvider>
} 