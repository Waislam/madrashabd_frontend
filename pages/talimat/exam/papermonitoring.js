import React from "react";

// Talimat Component
import PaperMonitoring from "../../../components/Talimat/Examination/PaperMonitoring";
import Layout from "../../../components/Layout/Layout";

const PaperMonitoringPage = () => {

    return (
        <>
            <PaperMonitoring/>
        </>
    )
};


export default PaperMonitoringPage;


PaperMonitoringPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

