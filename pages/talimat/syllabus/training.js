import axios from 'axios';
import api, { BASE_URL } from '../../../pages/api/api'
import { useEffect, useState } from 'react';

// Dawah Component
import Training from "../../../components/Talimat/Syllabus/Teachertraining";
import Layout from "../../../components/Layout/Layout";
// import Modal
import TeacherTrainUpdate from "../../../components/Talimat/Syllabus/Modals/TeacherTrainUpdate"
import TeacherTrainDeleteModal from "../../../components/Talimat/Syllabus/Modals/TeacherTrainDeleteModal"

const SyllabusTrainingPage = () => {

    const [showPutForm, setShowPutForm] = useState(false)
    const [teacherTrainData, setTeacherTrainData] = useState(null)
    const [loader, setLoader] = useState(false)

    const [showDeleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')


    //handle put request
    const handlePutRequest = async (e, ttrainId) => {
        setLoader(true)
        e.preventDefault()
        const list = await axios.get(`${BASE_URL}/talimat/teacher-training/detail/${ttrainId}/`)
        const teacherTrianData = list.data
        setTeacherTrainData(teacherTrianData.data)
        setLoader(false)
        setShowPutForm(true)
    }

    // handle delete request
    const handleDeleteRequest = (obj_id)=>{
        setDeleteId(obj_id)
        setDeleteModal(true)
    }

    return (
        <>
            <Training
                handlePutRequest={handlePutRequest}
                handleDeleteRequest={handleDeleteRequest}
            />

            {loader ? <h1></h1> :
                <TeacherTrainUpdate
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    teachertrainolddata={teacherTrainData}
                >
                </TeacherTrainUpdate>
            }

            <TeacherTrainDeleteModal
                show={showDeleteModal}
                onHide={() => setDeleteModal(false)}
                delete_id={deleteId}
            >
            </TeacherTrainDeleteModal>
        </>
    )
};


export default SyllabusTrainingPage;


SyllabusTrainingPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

