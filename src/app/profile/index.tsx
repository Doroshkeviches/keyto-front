import React, { FC } from "react";

// ======== components ============
import PageHeaderComp from "components/page-header.comp";
import ProfileRoutes from "./profile.routes";

const ProfilePage: FC = () => {
    return (
        <>
            {/* <PageHeaderComp /> */}
            <ProfileRoutes />
        </>
    );
};

export default ProfilePage;