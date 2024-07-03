import MobileNav from "@/components/share/MobileNav";
import Sidebar from "@/components/share/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/* sidebar */}
      <Sidebar />
      {/* MobiNav */}
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
