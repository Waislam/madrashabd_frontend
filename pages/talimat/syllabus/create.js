import api, { BASE_URL } from '../../../pages/api/api'
import { useEffect, useState } from 'react';
import axios from 'axios';

// Dawah Component
import Create from "../../../components/Talimat/Syllabus/Createsyllabus";
import Layout from "../../../components/Layout/Layout";
//import modal
import SyllabusCreateUpdateModal from "../../../components/Talimat/Syllabus/Modals/SyllabusCreateUpdateModal"

const SyllabusCreatePage = () => {

    const [classList, setClassList] = useState(null)
    const [showPutForm, setShowPutForm] = useState(false)
    const [syllabusOldData, setSyllabusOldData] = useState(null)
    const [loader, setLoader] = useState(false)


    //get class list
    const getClassList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/classes/`)
        const classes = list.data
        setClassList(classes)
    }


    //handle put request
    const handlePutRequest = async (e, syllabusId) => {
        setLoader(true)
        e.preventDefault()
        const list = await axios.get(`${BASE_URL}/talimat/syllabus/detail/${syllabusId}/`)
        const syllabusData = list.data
        setSyllabusOldData(syllabusData.data)
        getClassList()
        setLoader(false)
        setShowPutForm(true)
    }


    return (
        <>
            <Create
                getClassList={getClassList}
                class_list={classList}
                handlePutRequest={handlePutRequest}
            />

            {loader ? <h1></h1> :
                <SyllabusCreateUpdateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    class_list={classList}
                    syllabusOldData={syllabusOldData}
                >
                </SyllabusCreateUpdateModal>
            }
        </>
    )
};


export default SyllabusCreatePage;


SyllabusCreatePage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

