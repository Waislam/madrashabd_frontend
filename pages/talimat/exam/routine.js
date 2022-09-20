import React from "react";

// Talimat Component
import Routine from "../../../components/Talimat/Examination/Routine";
import Layout from "../../../components/Layout/Layout";

const RoutinePage = () => {

    return (
        <>
            <Routine/>
        </>
    )
};


export default RoutinePage;


RoutinePage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

