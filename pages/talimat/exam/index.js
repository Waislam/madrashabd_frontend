import React, {useEffect, useState} from "react";

// Talimat Component
import Exam from "../../../components/Talimat/Examination/Examination";
import Layout from "../../../components/Layout/Layout";

// api
import api from "../../api/api";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

const ExamPage = () => {
    const [isLoading, setLoading] = useState(false)
    const [examAnnouncementList, setExamAnnouncementList] = useState(null)

    const getExamListApi = async () => {
        setLoading(true);
        // console.log(`students/100/?student_id=${studentId && studentId}&search=${searchStudent && searchStudent}&page=${studentListPageNum}&records=${studentListRecords && studentListRecords}`);
        api.get(`talimat/100/exam-announcement/`)
            .then((response) => {
                console.log("response", response.data);
                setExamAnnouncementList(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            })
    };

    useEffect(() => {
        getExamListApi().then(() => {

        })

    }, [])

    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (!examAnnouncementList) {
        return (
            <h1>No students data found</h1>
        )
    }


    return (
        <>
            <Exam examAnnouncementList={examAnnouncementList}/>
        </>
    )
};


export default ExamPage;


ExamPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

