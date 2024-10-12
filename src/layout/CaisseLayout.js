import React from "react";
import { Outlet } from "react-router-dom";

const CaisseLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CaisseLayout;
