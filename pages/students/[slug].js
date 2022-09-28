import React from "react";
import {useRouter} from 'next/router'

// StudentDetails
import StudentDetails from "../../components/Students/StudentDetails";
import Layout from "../../components/Layout/Layout";
import {getAllStudents, getStudentDetailApi} from "../api/StudentAPI/students_api";

const StudentDetail = ({student}) => {

    const router = useRouter();

    return (
        <>
            <StudentDetails student={student}/>
        </>
    )
};

// This function gets called at build time
export async function getStaticPaths() {
    const students = await getAllStudents();
    const paths = students.results.map((student) => ({
        params: {slug: student.slug},
    }));

    return {paths, fallback: false}
}


export async function getStaticProps({params}) {

    const student = await getStudentDetailApi(params.slug);
    return {
        props: {
            student,
        },
        revalidate: 1,
    }
}

export default StudentDetail;

StudentDetail.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};
