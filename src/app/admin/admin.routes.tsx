import React, { FC, PropsWithChildren, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: any }> = ({ element: Element }) => {
  return (
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
  );
};

// ======= pages ======= //
const AllUsers = React.lazy(() => import("app/admin/components/allUsers/AllUsers.page"));


const AdminRoutes: FC = () => {
  return (
    <Routes>
      <Route path={"/users"} element={<Suspended element={AllUsers} />} />
      {/* DEFAULT */}
      {/* <Route path='*' element={<Navigate to="/asd" />} /> */}
    </Routes>
  );
};

export default AdminRoutes;
