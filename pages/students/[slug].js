import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'

// StudentDetails
import StudentDetails from "../../components/Students/StudentDetails";
import Layout from "../../components/Layout/Layout";
import {getStudentDetail, getStudentDetailApi} from "../api/StudentAPI/students_api";

const StudentDetail = (props) => {
    const [student, setStudent] = useState(null)
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    console.log("router data", router)

    useEffect(() => {
        setLoading(true)
        console.log("router.query.slug", router.query.slug);
        getStudentDetailApi(router.query.slug).then((data) => {
            setStudent(data.data)
            setLoading(false)
        })
    }, [router.query.slug]);

    return (
        <>
            <h1>{router.query.slug}</h1>
            <StudentDetails student={student} loading={loading}/>
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
