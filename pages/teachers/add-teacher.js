import React from "react";
import Layout from "../../components/Layout/Layout";

const AddTeacherPage = () => {

    return (
        <>
            <h3>Hello</h3>
        </>
    )
};


export default AddTeacherPage;


AddTeacherPage.getLayout = (page) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
};

