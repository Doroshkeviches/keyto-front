import React, { FC } from "react";

// ======== components ============
import PageHeaderComp from "components/page-header.comp";
import MainRoutes from "./main.routes";

const MainPage: FC = () => {
    return (
        <>
            {/* <PageHeaderComp /> */}
            <MainRoutes />
        </>
    );
};

export default MainPage;