import React from "react";
import { Outlet } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      NotFound Layout
      <Outlet />
    </div>
  );
};

export default React.memo(NotFound);
