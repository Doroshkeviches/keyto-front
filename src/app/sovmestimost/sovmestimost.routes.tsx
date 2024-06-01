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
const Sovmestimost = React.lazy(() => import("app/sovmestimost/components/Sovmestimost.page"));


const SovmestimostRoutes: FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Suspended element={Sovmestimost} />} />
        </Routes>
    );
};

export default SovmestimostRoutes;
