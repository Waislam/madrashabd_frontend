import React from "react";
import axios from "axios";
import api, {BASE_URL} from "../../pages/api/api"
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";


// Setting Component
import Classs from "../../components/Setting/Classs"
import Layout from "../../components/Layout/Layout";
//Modals import
import ClassUpdateModal from "../../components/Setting/Modals/ClassUpdateModal"


const ClasssPage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [showPutForm, setShowPutForm] = useState(false);
    const [classOldData, setClassOldData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [departmentList, setDepartmentList] = useState(null);

    // Department List collection
    const getDepartmentList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/department/`);
        const departments = list.data;
        setDepartmentList(departments)
    };

    useEffect(() => {
        getDepartmentList()
    }, []);


    //handle put request
    const handlePutRequest = async (e, classId) => {
        setLoader(true);
        e.preventDefault();
        const list = await axios.get(`${BASE_URL}/settings/classes/detail/${classId}/`);
        const classData = list.data;
        setClassOldData(classData);
        setLoader(false);
        setShowPutForm(true)
    };

    return (
        <>
            <Classs
                handlePutRequest={handlePutRequest}
                departmentList={departmentList}
            />

            {loader ? <h1></h1> :
                <ClassUpdateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    classolddata={classOldData}
                    departmentList={departmentList}
                >
                </ClassUpdateModal>
            }
        </>
    )
};

export default ClasssPage;

ClasssPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}