import React, {useEffect, useState} from "react";

// StudentList Component
import StudentList from "../../components/Students/StudentList";
import Layout from "../../components/Layout/Layout";
import api, {BASE_URL} from "../api/api";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

const Index = () => {
    const [students, setStudents] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [studentId, setStudentID] = useState('')
    const [searchStudent, setSearchStudent] = useState('')
    const [studentListPageNum, setStudentListPageNum] = useState(1)
    const [studentListRecords, setStudentListRecords] = useState('')

    const getStudents = () => {
        setLoading(true)
        // fetch('/api/profile-data')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setData(data)
        //         setLoading(false)
        //     })

        console.log(`students/?student_id=${studentId && studentId}&search=${searchStudent && searchStudent}&page=${studentListPageNum}&records=${studentListRecords && studentListRecords}`)
        api.get(`students/?student_id=${studentId && studentId}&search=${searchStudent && searchStudent}&page=${studentListPageNum}&records=${studentListRecords && studentListRecords}`)
            // api.get('students/')
            .then((response) => {
                console.log("response", response.data)
                setStudents(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log("error", error)
                setLoading(false)
            })
    }

    useEffect(() => {
        getStudents()
    }, [studentListPageNum])

    console.log("searchStudent", searchStudent)

    const handleStudentListPageNum = () => {
        console.log("handleStudentListPageNum() called")
        setStudentListPageNum(studentListPageNum + 1)
    }

    const handleSearchBtn = () => {
        getStudents()
    }

    const nextPage = () => {
        setStudentListPageNum(studentListPageNum + 1)
    }

    const prevPage = () => {
        setStudentListPageNum(studentListPageNum - 1)
    }

    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (!students) {
        return (
            <h1>No students data found</h1>
        )
    }

    return (
        <>
            <StudentList
                students={students}
                handleStudentListPageNum={handleStudentListPageNum}
                studentListPageNum={studentListPageNum}
                setSearchStudent={setSearchStudent}
                nextPage={nextPage}
                prevPage={prevPage}
                handleSearchBtn={handleSearchBtn}
            />
        </>
    )
};


export default Index;


Index.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

// export async function getStaticProps(ctx) {
//     // const categories = await ();
//     // const students =  api('students/')
//
//     console.log("ctx", ctx)
//
//     const res = await fetch(`${BASE_URL}students`)
//     const students = await res.json()
//     // console.log("students", students)
//
//     return {
//         props: {
//             students
//         },
//     };
// }
