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
const Dogovor = React.lazy(() => import("app/dogovor/dogovor.page"));


const DogovorRoutes: FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Suspended element={Dogovor} />} />
            {/* DEFAULT */}
            {/* <Route path='*' element={<Navigate to="/asd" />} /> */}
        </Routes>
    );
};

export default DogovorRoutes;
