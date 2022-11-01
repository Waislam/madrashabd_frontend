import axios from 'axios';
import api, { BASE_URL } from '../../../pages/api/api'
import { useEffect, useState } from 'react';

// Dawah Component
import Syllabus from "../../../components/Talimat/Syllabus/Syllabus";
import Layout from "../../../components/Layout/Layout";
// import Modal
import SyllabusUpdateModal from "../../../components/Talimat/Syllabus/Modals/SyllabusUpdateModal"
import SyllabusDelteModal from "../../../components/Talimat/Syllabus/Modals/SyllabusDeleteModal"



const SyllabusPage = () => {

    const [classList, setClassList] = useState(null)
    const [showPutForm, setShowPutForm] = useState(false)
    const [bookDistOldData, setBookDistOldData] = useState(null)
    const [loader, setLoader] = useState(false)
    const [showDeleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')

    //get class list
    const getClassList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/classes/`)
        const classes = list.data
        setClassList(classes)
    }

    //handle put request
    const handlePutRequest = async (e, bookDistId) => {
        setLoader(true)
        e.preventDefault()
        const list = await axios.get(`${BASE_URL}/talimat/book-dist-teacher/detail/${bookDistId}/`)
        const bookDistData = list.data
        setBookDistOldData(bookDistData.data)
        getClassList()
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
            <Syllabus
                getClassList={getClassList}
                classList={classList}
                handlePutRequest={handlePutRequest}
                handleDeleteRequest={handleDeleteRequest}
            />
            {loader? <h1></h1>:
                <SyllabusUpdateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    classList={classList}
                    bookDistOldData={bookDistOldData}
                >
                </SyllabusUpdateModal>
            }

            <SyllabusDelteModal
            show={showDeleteModal}
            onHide={()=>setDeleteModal(false)}
            delete_id={deleteId}
            >
            </SyllabusDelteModal>
        </>
    )
};


export default SyllabusPage;


SyllabusPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

