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
const Personal = React.lazy(() => import("app/personal/components/PersonalPage"));


const PersonalRoutes: FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Suspended element={Personal} />} />
        </Routes>
    );
};

export default PersonalRoutes;
