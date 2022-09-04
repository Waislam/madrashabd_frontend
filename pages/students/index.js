import React from "react";

// StudentList Component
import StudentList from "../../components/Students/StudentList";
import Layout from "../../components/Layout/Layout";

const Index = () => {

    return (
        <>
            <StudentList/>
        </>
    )
};


export default Index;


Index.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

