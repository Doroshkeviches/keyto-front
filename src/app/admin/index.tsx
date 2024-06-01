import React, { FC } from "react";

// ======== components ============
import PageHeaderComp from "components/page-header.comp";
import AdminRoutes from "./admin.routes";

const AdminPage: FC = () => {
  return (
    <>
    {/* TODO change to admin header */}
      <PageHeaderComp /> 
      <AdminRoutes />
    </>
  );
};

export default AdminPage;