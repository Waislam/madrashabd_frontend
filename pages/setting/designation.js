import React from "react";
import axios from "axios";
import api, { BASE_URL } from "../../pages/api/api"
import { useEffect, useState } from "react";

// Setting Component
import Designation from "../../components/Setting/Designation"
import Layout from "../../components/Layout/Layout";
//Modal import
import DesignationUpdateModal from "../../components/Setting/Modals/DesignationUpdateModal"


const DesignationPage = () =>{
    const [showPutForm, setShowPutForm] = useState(false)
    const [departmentOldData, setDepartmentOldData] = useState(null)
    const [loader, setLoader] = useState(false)


    //handle put request
    const handlePutRequest = async (e, designationSlug) => {
        console.log("designation slug: ", designationSlug)
        setLoader(true)
        e.preventDefault()
        const list = await axios.get(`${BASE_URL}/settings/designation/detail/${designationSlug}/`)
        const designationData = list.data
        setDepartmentOldData(designationData)
        setLoader(false)
        setShowPutForm(true)
    }

    return(
        <>
            <Designation handlePutRequest={handlePutRequest}/>

            {loader?<h1></h1>:
            <DesignationUpdateModal
                show={showPutForm}
                onHide={()=>setShowPutForm(false)}
                departmentolddata={departmentOldData}
            >
            </DesignationUpdateModal>
            }
        </>
    )
}

export default DesignationPage;

DesignationPage.getLayout=(page)=>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}