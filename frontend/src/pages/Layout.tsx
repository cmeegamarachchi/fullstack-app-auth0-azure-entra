import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

// Props interface for the Layout component
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          MyApp
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block p-2 rounded hover:bg-gray-700 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block p-2 rounded hover:bg-gray-700 transition"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block p-2 rounded hover:bg-gray-700 transition"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">© 2025 MyApp</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-semibold">Welcome</h1>
        </header>
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
