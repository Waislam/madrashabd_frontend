import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'

// StudentDetails
import StudentDetails from "../../components/Students/StudentDetails";
import Layout from "../../components/Layout/Layout";
import {getStudentDetail, getStudentDetailApi} from "../api/StudentAPI/students_api";

const StudentDetail = (props) => {
    const [student, setStudent] = useState({})

    const router = useRouter()
    console.log("router data", router)

    useEffect(() => {
        console.log("router.query.slug", router.query.slug);
        getStudentDetailApi(router.query.slug).then((data) => {
            setStudent(data)
        })
    }, [router.query.slug]);

    return (
        <>
            <h1>{router.query.slug}</h1>
            <StudentDetails student={student}/>
        </>
    )
};

export default StudentDetail;

StudentDetail.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};
