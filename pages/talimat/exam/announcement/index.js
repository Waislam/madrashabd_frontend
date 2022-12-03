import React, {useEffect, useState} from "react";

// Talimat Component
import Exam from "../../../../components/Talimat/Examination/Examination";
import Layout from "../../../../components/Layout/Layout";
import api from "../../../api/api";

const ExamPage = () => {
    const [isLoading, setLoading] = useState(false);
    const [examAnnouncementList, setExamAnnouncementList] = useState(null);

    const getExamListApi = async () => {
        setLoading(true);
        api.get(`talimat/100/exam-announcement/`)
            .then((response) => {
                setExamAnnouncementList(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false)
            })
    };

    useEffect(() => {
        getExamListApi().then(() => {

        })

    }, []);

    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }


    return (
        <>
            <Exam
                examAnnouncementList={examAnnouncementList}
                setExamAnnouncementList={setExamAnnouncementList}
            />
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

