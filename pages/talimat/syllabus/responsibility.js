import React from "react";

// Dawah Component
import Create from "../../../components/Talimat/Syllabus/TeacherAndStaffResponsibility";
import Layout from "../../../components/Layout/Layout";

const TeacherAndStaffResponsibilityPage = () => {

    return (
        <>
            <Create/>
        </>
    )
};


export default TeacherAndStaffResponsibilityPage;


TeacherAndStaffResponsibilityPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

