import React from "react";

// Talimat Component
import Exam from "../../../components/Talimat/Examination/Examination";
import Layout from "../../../components/Layout/Layout";

const ExamPage = () => {

    return (
        <>
            <Exam/>
        </>
    )
};


export default ExamPage;


ExamPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

