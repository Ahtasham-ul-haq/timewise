import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-64 md:z-[80] md:inset-y-0 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-64 py-4">
        {/* <Topbar /> */}
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
