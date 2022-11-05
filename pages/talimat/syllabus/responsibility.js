import api, { BASE_URL } from '../../../pages/api/api'
import { useEffect, useState } from 'react';
import axios from 'axios';

// Dawah Component
import Create from "../../../components/Talimat/Syllabus/TeacherAndStaffResponsibility";
import Layout from "../../../components/Layout/Layout";
//import modal
import ResponsibilityUpdateModal from "../../../components/Talimat/Syllabus/Modals/TearcherResponseUpdateModal"
import ResponsibilityDeleteModal from "../../../components/Talimat/Syllabus/Modals/ResponsibilityDeleteModal"

const TeacherAndStaffResponsibilityPage = () => {

    const [showPutForm, setShowPutForm] = useState(false)
    const [responsibilityOldData, setResponsibilityOldData] = useState(null)
    const [loader, setLoader] = useState(false)

    const [showDeleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')


    //handle put request
    const handlePutRequest = async (e, responseId) => {
        setLoader(true)
        e.preventDefault()
        const list = await axios.get(`${BASE_URL}/talimat/responsibility/detail/${responseId}/`)
        const responseData = list.data
        setResponsibilityOldData(responseData.data)
        setLoader(false)
        setShowPutForm(true)
    }

    // handle delete request
    const handleDeleteRequest = (obj_id) => {
        setDeleteId(obj_id)
        setDeleteModal(true)
    }

    return (
        <>
            <Create
                handlePutRequest={handlePutRequest}
                handleDeleteRequest={handleDeleteRequest}
            />

            {loader ? <h1></h1> :
                <ResponsibilityUpdateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    old_data={responsibilityOldData}
                >
                </ResponsibilityUpdateModal>
            }

            <ResponsibilityDeleteModal
                show={showDeleteModal}
                onHide={() => setDeleteModal(false)}
                delete_id={deleteId}
            >
            </ResponsibilityDeleteModal>
        </>
    )
};


export default TeacherAndStaffResponsibilityPage;


TeacherAndStaffResponsibilityPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

