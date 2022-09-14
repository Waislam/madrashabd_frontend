import React from "react";

// Dawah Component
import ExtraActivity from "../../components/Talimat/ExtraActivity";
import Layout from "../../components/Layout/Layout";

const ExtraActivityPage = () => {

    return (
        <>
            <ExtraActivity/>
        </>
    )
};


export default ExtraActivityPage;


ExtraActivityPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

