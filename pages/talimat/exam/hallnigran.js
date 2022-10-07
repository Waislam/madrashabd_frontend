import React from "react";

// Talimat Component
import HallNigran from "../../../components/Talimat/Examination/HallNigran";
import Layout from "../../../components/Layout/Layout";

const HallNigranPage = () => {

    return (
        <>
            <HallNigran/>
        </>
    )
};


export default HallNigranPage;


HallNigranPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

