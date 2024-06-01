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
const Main = React.lazy(() => import("app/main/components/Main/Main.page"));


const MainRoutes: FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Suspended element={Main} />} />
            {/* DEFAULT */}
            {/* <Route path='*' element={<Navigate to="/asd" />} /> */}
        </Routes>
    );
};

export default MainRoutes;
