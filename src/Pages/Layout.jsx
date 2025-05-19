import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex h-screen bg-sky-100/70 overflow-y-auto no-scrollbar">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col flex-1 overflow-auto">
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}

export default Layout;
