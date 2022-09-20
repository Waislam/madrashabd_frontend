import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'

// StudentDetails
import StudentDetails from "../../components/Students/StudentDetails";
import Layout from "../../components/Layout/Layout";
import {getStudentDetail, getStudentDetailApi} from "../api/StudentAPI/students_api";

const StudentDetail = () => {
    const [student, setStudent] = useState(null)
    const [loader, setLoader] = useState(false)

    const router = useRouter()
    console.log("router data", router)


    useEffect( () => {
        console.log("router.query.slug", router.query.slug);
        setLoader(true)
        getStudentDetailApi(router.query.slug).then((data) => {
            console.log("data in get api", data)
            setStudent(data)
            setLoader(false)
            console.log('student', student)
        })
    }, []);

    return (
        <>
            <h1>{router.query.slug}</h1>
            <StudentDetails student={student} loader={loader} />
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
