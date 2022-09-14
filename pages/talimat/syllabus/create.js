import React from "react";

// Dawah Component
import Create from "../../../components/Talimat/Syllabus/Createsyllabus";
import Layout from "../../../components/Layout/Layout";

const SyllabusCreatePage = () => {

    return (
        <>
            <Create/>
        </>
    )
};


export default SyllabusCreatePage;


SyllabusCreatePage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

