import React, { ReactNode } from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// Props interface for the Layout component
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "10rem",
        "--sidebar-width-mobile": "10rem",
      }}
    >
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="ml-2">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
