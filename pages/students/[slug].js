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

    const router = useRouter();
    // console.log("router data", router)
    // console.log("router student", student)

    return (
        <>
            <h1>{router.query.slug}</h1>
            <StudentDetails student={student}/>
        </>
    )
};

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    // const students = await api.get(`students/?student_id=${studentId && studentId}&search=${searchStudent && searchStudent}&page=${studentListPageNum}&records=${studentListRecords && studentListRecords}`)
    // const students = await axios.get("http://127.0.0.1:8086/students/")
    const students = await getAllStudents();
    // console.log("students", students)

    // Get the paths we want to pre-render based on posts
    const paths = students.results.map((student) => ({
        params: {slug: student.slug},
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
}


export async function getStaticProps({params}) {
    console.log("students params", params);
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const student = await getStudentDetailApi(params.slug);

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            student,
        },
        // Re-generate the post at most once per second
        // if a request comes in
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
