import React, { FC } from "react";

// ======== components ============
import PageHeaderComp from "components/page-header.comp";
import MainRoutes from "./main.routes";
import Footer from "components/Footer/Footer";

const MainPage: FC = () => {
    return (
        <>
            {/* <PageHeaderComp /> */}
            <MainRoutes />
        </>
    );
};

export default MainPage;