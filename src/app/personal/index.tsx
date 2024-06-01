import React, { FC } from "react";

// ======== components ============
import PageHeaderComp from "components/page-header.comp";
import PersonalRoutes from "./personal.routes";

const PersonalPage: FC = () => {
    return (
        <>
            {/* <PageHeaderComp /> */}
            <PersonalRoutes />
        </>
    );
};

export default PersonalPage;