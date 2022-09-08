import React from "react";

// Talimat Component
import ResultSheet from "../../../components/Talimat/Examination/ResultSheet";
import Layout from "../../../components/Layout/Layout";

const ResultSheetPage = () => {

    return (
        <>
            <ResultSheet/>
        </>
    )
};


export default ResultSheetPage;


ResultSheetPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

