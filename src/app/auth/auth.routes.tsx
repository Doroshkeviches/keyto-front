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
const SignIn = React.lazy(() => import("app/auth/components/signIn/SignIn.page"));
const ForgotPassword = React.lazy(() => import("app/auth/components/forgotPassword/ForgotPassword.page"));
const ChangePassword = React.lazy(() => import("app/auth/components/ChangePassword/ChangePassword.page"));


const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path={"/signin"} element={<Suspended element={SignIn} />} />
      <Route path={"/forgot-password"} element={<Suspended element={ForgotPassword} />} />
      <Route path={"/change-password"} element={<Suspended element={ChangePassword} />} />
      {/* DEFAULT */}
      {/* <Route path='*' element={<Navigate to="/asd" />} /> */}
    </Routes>
  );
};

export default AuthRoutes;
