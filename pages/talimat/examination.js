import React from "react";

// Examination Component
import Examination from "../../components/Talimat/Examination";
import Layout from "../../components/Layout/Layout";

const ExaminationPage = () => {

    return (
        <>
            <Examination/>
        </>
    )
};


export default ExaminationPage;


ExaminationPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

