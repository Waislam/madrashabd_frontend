import React from "react";

// StudentDetails
import StudentDetails from "../../components/Students/StudentDetails";
import Layout from "../../components/Layout/Layout";

const StudentDetail = () => {
    return (
        <>
            <StudentDetails/>
        </>
    )
};

export default StudentDetail;

StudentDetail.getLayout = function getLayout({page}) {
    return (
        <Layout>{page}</Layout>
    )
};
