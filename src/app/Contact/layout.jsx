import React from "react";
import { Outlet } from "react-router-dom";

const ContactLayout = () => {
  return (
    <div>
      Contact Layout
      <Outlet />
    </div>
  );
};

export default React.memo(ContactLayout);
