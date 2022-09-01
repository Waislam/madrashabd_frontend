import React from "react";
import api from '/pages/api/api';

// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";

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

