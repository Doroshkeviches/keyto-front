import React, { FC } from "react";

// ======== components ============
import PageHeaderComp from "components/page-header.comp";
import SovmestimostRoutes from "./sovmestimost.routes";

const SovmestimostPage: FC = () => {
    return (
        <>
            {/* <PageHeaderComp /> */}
            <SovmestimostRoutes />
        </>
    );
};

export default SovmestimostPage;