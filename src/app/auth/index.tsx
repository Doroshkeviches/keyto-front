import React, { FC } from "react";

// ======== components ============
import PageHeaderComp from "components/page-header.comp";
import AuthRoutes from "./auth.routes";
import { useAppSelector } from "storeTypes";
import { authSelector } from "./store/auth.selectors";

const AuthPage: FC = () => {
  return (
    <>
      {/* <PageHeaderComp /> */}
      <AuthRoutes />
    </>
  );
};

export default AuthPage;