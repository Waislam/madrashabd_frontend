import React from "react";
import {useRouter} from 'next/router'

// StudentDetails
import StudentDetails from "../../components/Students/StudentDetails";
import Layout from "../../components/Layout/Layout";

// api
import {getStudentDetailApi} from "../api/StudentAPI/students_api";

// session
import {getSession} from "next-auth/react";

const StudentDetail = ({student}) => {
    console.log("student :", student);
    const router = useRouter();

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


export async function getServerSideProps({ req, params }) {
    const session = await getSession({ req });
    const student = await getStudentDetailApi(params.slug);

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
