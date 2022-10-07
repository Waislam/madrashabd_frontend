import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'

// StudentDetails
import StudentDetails from "../../components/Students/StudentDetails";
import Layout from "../../components/Layout/Layout";
import {getStudentDetailApi} from "../api/StudentAPI/students_api";

const StudentDetail = ({student}) => {
    const router = useRouter()

    if (router.isFallback) {
        return (
            <h1>Loading....</h1>
        )
    }

    return (
        <>
            <StudentDetails student={student}/>
        </>
    )
};


export async function getServerSideProps(context) {
    const student = await getStudentDetailApi(context.params.slug)

    return {
        props: {
            student,
        },
    };
}

export default StudentDetail;

StudentDetail.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};
