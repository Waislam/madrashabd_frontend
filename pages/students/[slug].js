import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'

// StudentDetails
import StudentDetails from "../../components/Students/StudentDetails";
import Layout from "../../components/Layout/Layout";
import {getAllStudents, getStudentDetail, getStudentDetailApi} from "../api/StudentAPI/students_api";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import api from "../api/api";
import axios from "axios";

const StudentDetail = ({student}) => {

    const router = useRouter()
    // console.log("router data", router)
    // console.log("router student", student)

    if (router.isFallback) {
        return (
            <h1>Loading....</h1>
        )
    }

    return (
        <>
            <h1>{router.query.slug}</h1>
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
