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
const Profile = React.lazy(() => import("app/profile//profile.page"));


const ProfileRoutes: FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Suspended element={Profile} />} />
        </Routes>
    );
};

export default ProfileRoutes;
