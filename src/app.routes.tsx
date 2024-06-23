import { authSelector } from "app/auth/store/auth.selectors";
import Footer from "components/Footer/Footer";
import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useAppSelector } from "storeTypes";

// ======= private route ======= //
const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  const { session } = useAppSelector(authSelector)
  return session ? (
    <Suspense fallback={<div />}>
      <div><Element />
      <Footer />
      </div>
    </Suspense>
  ) : (
    <Navigate to={"/auth/signin"} />
  );
};
// ======= admin route ======= //

const AdminRoute: FC<{ element: any }> = ({ element: Element }) => {
  const { session } = useAppSelector(authSelector)
  return session?.role_type === 'Admin' ? (
    <Suspense fallback={<div />}>
      <div><Element /></div>
    </Suspense>
  ) : (
    <Navigate to={"/"} />
  );
};

// ======= public route ======= //
const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<div />}>
    <Element />
    <Footer />
  </Suspense>
);

// ======= pages ======= //
const AuthPage = React.lazy(() => import("app/auth"));
const MainPage = React.lazy(() => import("app/main"));
const PersonalPage = React.lazy(() => import("app/personal"));
const SovmestimostPage = React.lazy(() => import("app/sovmestimost"));
const DogovorPage = React.lazy(() => import("app/dogovor"));




const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/auth/*"} element={<PublicRoute element={AuthPage} />} />

      {/* PRIVATE */}
      <Route path={"/admin/*"} element={<AdminRoute element={() => <div>ADMIN</div>} />} />

      {/* TODO CHANGe to private route */}
      <Route path={"/personal/*"} element={<PublicRoute element={PersonalPage} />} />
      {/* TODO CHANGe to private route */}
      <Route path={"/sovmestimost/*"} element={<PublicRoute element={SovmestimostPage} />} />
      <Route path={"/dogovor/*"} element={<PublicRoute element={DogovorPage} />} />

      {/* PRIVATE */}
      <Route path={"/*"} element={<PublicRoute element={MainPage} />} />

      {/* DEFAULT */}
      {/* <Route path='*' element={<Navigate to="/auth" />} /> */}
    </Routes>
  );
};

export default AppRoutes;
