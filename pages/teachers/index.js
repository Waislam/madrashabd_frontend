import React from "react";


// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";

import Layout from "../../components/Layout/Layout";


const Index = () => {
    return (
        <>
           <TeacherLists/>
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
