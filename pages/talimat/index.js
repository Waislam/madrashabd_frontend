import React from "react";

// Talimat Component
import Talimat from "../../components/Talimat/Talimat";
import Layout from "../../components/Layout/Layout";

const TalimatPage = () => {

    return (
        <>
            <Talimat/>
        </>
    )
};


export default TalimatPage;


TalimatPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

