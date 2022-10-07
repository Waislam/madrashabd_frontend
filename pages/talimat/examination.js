import React from "react";

// Examination Component
import Layout from "../../components/Layout/Layout";
import Examination from "../../components/Talimat/Examination/Examination";

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

