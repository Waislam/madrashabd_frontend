import React from "react";

// Dawah Component
import Dawah from "../../components/Talimat/Dawah";
import Layout from "../../components/Layout/Layout";

const DawahPage = () => {

    return (
        <>
            <Dawah/>
        </>
    )
};


export default DawahPage;


DawahPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

