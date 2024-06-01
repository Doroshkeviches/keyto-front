import React, { FC } from "react";

// ======== components ============
import PageHeaderComp from "components/page-header.comp";
import DogovorRoutes from "./dogovor.routes";

const DogovorPage: FC = () => {
    return (
        <>
            {/* <PageHeaderComp /> */}
            <DogovorRoutes />
        </>
    );
};

export default DogovorPage;