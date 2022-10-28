import React from "react";
import axios from "axios";
import api, { BASE_URL } from "../../pages/api/api"
import { useEffect, useState } from "react";

// Setting Component
import Groups from "../../components/Setting/Groups"
import Layout from "../../components/Layout/Layout";
//Modal immport
import GroupUdpateModal from "../../components/Setting/Modals/GroupUpdateModal"


const GroupsPage = () => {

    const [showPutForm, setShowPutForm] = useState(false)
    const [groupOldData, setGroupOldData] = useState(null)
    const [loader, setLoader] = useState(false)
    const [departmentList, setDepartmentList] = useState(null)
    const [classList, setClassList] = useState(null)

    //get class and department list
    const getDepartmentList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/department/`)
        const departments = list.data
        setDepartmentList(departments)
    }
    const getClassList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/classes/`)
        const classes = list.data
        setClassList(classes)

    }

    useEffect(() => {
        getDepartmentList()
        getClassList()
    }, [])

    //handle put request
    const handlePutRequest = async (e, groupId) => {
        setLoader(true)
        e.preventDefault()
        const list = await axios.get(`${BASE_URL}/settings/group/detail/${groupId}/`)
        const groupData = list.data
        setGroupOldData(groupData)
        setLoader(false)
        setShowPutForm(true)
    }

    return (
        <>
            <Groups
                handlePutRequest={handlePutRequest}
                departmentList={departmentList}
                classList={classList}
            />
            {loader? <h1></h1>:
                <GroupUdpateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    departmentList={departmentList}
                    classList={classList}
                    groupolddata={groupOldData}
                >
                </GroupUdpateModal>
            }
        </>
    )
}

export default GroupsPage;

GroupsPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}