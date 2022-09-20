import React from "react";

// Dawah Component
import Syllabus from "../../../components/Talimat/Syllabus/Syllabus";
import Layout from "../../../components/Layout/Layout";

const SyllabusPage = () => {

    return (
        <>
            <Syllabus/>
        </>
    )
};


export default SyllabusPage;


SyllabusPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

