import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@components/layout/Navbar"
import Sidebar from "@/components/layout/Sidebar";

const RootLayout = () => {
  
  return (
    <React.Fragment>
      <main className="h-[100vh] flex relative w-full">
        <Sidebar/>
        <section className="w-full">
          <Navbar />
          <Outlet/>
        </section>
      </main>
    </React.Fragment>
  );
};

export default React.memo(RootLayout);
