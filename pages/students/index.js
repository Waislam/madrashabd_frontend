import React, {useEffect, useState} from "react";
import api from '../api/api'

// StudentList Component
import StudentList from "../../components/Students/StudentList";
import Layout from "../../components/Layout/Layout";
import {getSession, useSession} from "next-auth/react";


const Index = ({studentListData}) => {
    console.log("studentListData", studentListData)
    const [students, setStudents] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [studentId, setStudentID] = useState('');
    const [searchStudent, setSearchStudent] = useState('');
    const [studentListPageNum, setStudentListPageNum] = useState(1);
    const [studentListRecords, setStudentListRecords] = useState('');
    const {data: session, status} = useSession();

    const madrasha_slug = session?.user.madrasha_slug

    const getStudents = async () => {
        setLoading(true);
        api.get(`/students/${madrasha_slug}/?student_id=${studentId && studentId}&search=${searchStudent && searchStudent}&page=${studentListPageNum}&records=${studentListRecords && studentListRecords}`)
            .then((response) => {
                setStudents(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false)
            })
    };

    useEffect(() => {
        getStudents().then(() => {

        })
    }, [studentListPageNum]);

    const handleStudentListPageNum = () => {
        setStudentListPageNum(studentListPageNum + 1)
    };

    const handleSearchBtn = () => {
        getStudents().then(() => {

        })
    };
    const nextPage = () => {
        setStudentListPageNum(studentListPageNum + 1)
    };

    const prevPage = () => {
        setStudentListPageNum(studentListPageNum - 1)
    };

    // if (isLoading) {
    //     return (
    //         <div className="text-center">
    //             <div className="spinner-border" role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     )
    // }

    if (!studentListData) {
        return (
            <h1>No students data found</h1>
        )
    }

    return (
        <>
            <StudentList
                students={studentListData}
                // handleStudentListPageNum={handleStudentListPageNum}
                // studentListPageNum={studentListPageNum}
                // setSearchStudent={setSearchStudent}
                // nextPage={nextPage}
                // prevPage={prevPage}
                // handleSearchBtn={handleSearchBtn}
            />
        </>
    )
};

export async function getServerSideProps({req}) {
    const session = await getSession({req});
    const madrasha_slug = session?.user.madrasha_slug;

    // Fetch data from external API
    const res = await api.get(`/students/${madrasha_slug}`);
    const studentListData = await res.data;

    // Pass data to the page via props
    return {
        props: {
            studentListData
        }
    }
}


export default Index;


Index.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};


