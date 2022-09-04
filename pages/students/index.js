import React from "react";

// StudentList Component
import StudentList from "../../components/Students/StudentList";
import Layout from '../../layouts/Layout';

const index = () => {

    return (
        <>
            <StudentList/>
        </>
    )
};


export default index;


index.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};