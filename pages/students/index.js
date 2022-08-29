import React from "react";
import api from '/pages/api/api';

// StudentList Component
import StudentList from "../../components/Students/StudentList";

const index = ({students}) => {
    console.log("Student", students);
    return (
        <>
            <StudentList students={students}/>
        </>
    )
};

// Fetching Data
export const getStaticProps = async () => {
    const res = await api.get(`students/`);
    return {
        props: {
            "students": res.data
        }
    }
};

export default index;

