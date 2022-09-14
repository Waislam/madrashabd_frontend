import React from "react";


// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";
import Layout from '../../layouts/Layout';


const index = () => {
    return (
        <>
           <TeacherLists/>
        </>
    )
};


// Fetching Data

/*
export const getStaticProps = async () => {
    const res = await api.get(`students/`);
    return {
        props: {
            "students": res.data
        }
    }
};
*/

export default index;

index.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

