import React from "react";

// Dawah Component
import Training from "../../../components/Talimat/Syllabus/Teachertraining";
import Layout from "../../../components/Layout/Layout";

const SyllabusTrainingPage = () => {

    return (
        <>
            <Training/>
        </>
    )
};


export default SyllabusTrainingPage;


SyllabusTrainingPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

