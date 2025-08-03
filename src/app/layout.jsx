import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@components/layout/Navbar"
import Footer from "@components/layout/Footer"

const RootLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="h-[90vh]">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(RootLayout);
